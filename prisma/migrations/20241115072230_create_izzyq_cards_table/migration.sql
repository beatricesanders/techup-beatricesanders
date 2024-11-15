/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "heat" INTEGER NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
