import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CreateGymService } from '../create-gym.service'

export function createGymServiceFactory() {
  const prismaGymRepository = new PrismaGymsRepository()
  const createGymService = new CreateGymService(prismaGymRepository)

  return createGymService
}
