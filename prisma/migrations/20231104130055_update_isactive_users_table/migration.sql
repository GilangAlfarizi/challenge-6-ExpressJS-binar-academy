/*
  Warnings:

  - Changed the type of `is_active` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "is_active",
ADD COLUMN     "is_active" BOOLEAN NOT NULL;
