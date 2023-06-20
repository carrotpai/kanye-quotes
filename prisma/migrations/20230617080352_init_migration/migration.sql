-- CreateTable
CREATE TABLE "quote" (
    "id" SERIAL NOT NULL,
    "quote" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "dislikes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
);
