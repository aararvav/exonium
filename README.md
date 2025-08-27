This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
# Exonium 

This is a [Next.js](https://nextjs.org/) project styled after Linear, with Tailwind CSS, Framer Motion, and MySQL integration support.

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment variables

Create a `.env.local` file in the root with your environment variables. For MySQL, add:

```
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

Replace `USER`, `PASSWORD`, `HOST`, `PORT`, and `DATABASE` with your MySQL credentials.

### 3. Database setup

- If using Prisma, run:
	```bash
	npx prisma migrate dev
	# or
	npx prisma db push
	```
- If using raw SQL, run your schema SQL file against your MySQL server.

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Project structure

- `src/app/` — Next.js app directory (pages, routes)
- `src/components/` — UI components
- `src/lib/` — Utilities and SVGs
- `public/` — Static assets (images, SVGs)

### 6. Customization

- Edit Tailwind config in `tailwind.config.js`
- Add or update database models as needed

### 7. Animations

- Uses Framer Motion for page transitions (login/signup)

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Prisma Documentation](https://www.prisma.io/docs/) (if using Prisma)

## Deployment

You can deploy this app to Vercel or any Node.js hosting provider. For MySQL, ensure your database is accessible from your deployment environment.


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

made with love by us shitasses
