import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterService } from '../register.service'

export function registerServiceFactory() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const registerService = new RegisterService(prismaUsersRepository)

  return registerService
}
