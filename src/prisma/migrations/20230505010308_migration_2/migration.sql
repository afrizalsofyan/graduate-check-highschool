/*
  Warnings:

  - Changed the type of `participant_number` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "participant_number",
ADD COLUMN     "participant_number" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_participant_number_key" ON "User"("participant_number");
