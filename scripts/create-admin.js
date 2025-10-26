import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    const adminPassword = "admin123!@#"; // You can change this password
    const hashedPassword = await hash(adminPassword, 12);

    const admin = await prisma.user.create({
        data: {
            name: "Admin",
            email: "admin@exonium.com", // You can change this email
            password: hashedPassword,
            role: "ADMIN"
        }
    });

    console.log("Admin user created:", {
        name: admin.name,
        email: admin.email,
        role: admin.role
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });