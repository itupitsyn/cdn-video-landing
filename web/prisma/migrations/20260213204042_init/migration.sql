-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "site" VARCHAR(2048) NOT NULL,
    "traffic" INTEGER NOT NULL,
    "telegram" VARCHAR(2048) NOT NULL,
    "isSent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);
