import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { SearchGymService } from '../search-gym.service'

export function searchGymServiceFactory() {
  const prismaGymRepository = new PrismaGymsRepository()
  const searchGymService = new SearchGymService(prismaGymRepository)

  return searchGymService
}
