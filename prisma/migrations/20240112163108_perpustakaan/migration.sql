/*
  Warnings:

  - You are about to drop the column `approved` on the `loan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `loan` DROP COLUMN `approved`,
    ADD COLUMN `status` ENUM('PENDING', 'APPROVED', 'RETURNED') NOT NULL DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE `History` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `loanId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `bookId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `borrowedAt` DATETIME(3) NOT NULL,
    `dueDate` DATETIME(3) NOT NULL,
    `returnedAt` DATETIME(3) NULL,
    `fine` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_loanId_fkey` FOREIGN KEY (`loanId`) REFERENCES `Loan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
