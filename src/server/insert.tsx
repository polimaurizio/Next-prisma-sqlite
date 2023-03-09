import { PrismaClient, Example } from '@prisma/client'

const prisma = new PrismaClient()

export async function createUser(name: string, email: string): Promise<Example> {
  const user = await prisma.example.create({
    data: {
      name,
      email,
    },
  })
  return user
}
