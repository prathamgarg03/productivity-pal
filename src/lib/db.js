import { PrismaClient } from "@prisma/client"

const globalWithPrisma = globalThis;

export const db = globalWithPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") {
    globalWithPrisma.prisma = db
}