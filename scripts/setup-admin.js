import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    // Admin credentials - you can change these
    const adminEmail = "admin@exonium.com";
    const adminPassword = "admin123!@#";
    const hashedPassword = await hash(adminPassword, 12);

    try {
        // Try to find existing admin
        const existingAdmin = await prisma.user.findUnique({
            where: {
                email: adminEmail
            }
        });

        if (existingAdmin) {
            // Update existing admin
            const updatedAdmin = await prisma.user.update({
                where: {
                    email: adminEmail
                },
                data: {
                    password: hashedPassword,
                    role: "ADMIN"
                }
            });
            console.log("Admin user updated:", {
                name: updatedAdmin.name,
                email: updatedAdmin.email,
                role: updatedAdmin.role
            });
        } else {
            // Create new admin
            const newAdmin = await prisma.user.create({
                data: {
                    name: "Admin",
                    email: adminEmail,
                    password: hashedPassword,
                    role: "ADMIN"
                }
            });
            console.log("Admin user created:", {
                name: newAdmin.name,
                email: newAdmin.email,
                role: newAdmin.role
            });
        }

        // Print the login credentials
        console.log("\nAdmin Login Credentials:");
        console.log("------------------------");
        console.log("Email:", adminEmail);
        console.log("Password:", adminPassword);
        console.log("------------------------");
        console.log("Please save these credentials securely!");
    } catch (error) {
        console.error("Error:", error);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });