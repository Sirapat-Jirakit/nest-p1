// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const product1 = await prisma.product.create({
    data: {
      product_name: 'Apple',
      product_price: 100,
      product_unit: 'kg',
    },
  });

  const user1 = await prisma.user.create({
    data: {
      email: 'test@gmail.com',
      username: 'test',
      password: 'test1234',
      name: 'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
    },
  });

  console.log({ product1, user1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
