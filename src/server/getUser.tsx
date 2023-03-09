import { PrismaClient, Example } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUsers(): Promise<Example[]> {
  const users = await prisma.example.findMany()
  return users
}