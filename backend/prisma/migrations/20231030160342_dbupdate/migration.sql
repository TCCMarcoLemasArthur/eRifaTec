/*
  Warnings:

  - You are about to drop the `rifapremio` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nofeed` to the `rifa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rifa" ADD COLUMN     "nofeed" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "rifapremio";
