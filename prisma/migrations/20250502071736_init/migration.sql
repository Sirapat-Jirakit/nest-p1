/*
  Warnings:

  - You are about to drop the column `priduct_price` on the `products` table. All the data in the column will be lost.
  - Added the required column `product_price` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "priduct_price",
ADD COLUMN     "product_price" INTEGER NOT NULL;
