/*
  Warnings:

  - You are about to alter the column `status` on the `vip` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `vip` MODIFY `status` VARCHAR(191) NOT NULL;
