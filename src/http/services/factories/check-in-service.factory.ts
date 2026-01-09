import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { CheckInService } from '../check-in.service'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function checkInServiceFactory() {
  const prismaCheckInsRepository = new PrismaCheckInsRepository()
  const prismaGymRepository = new PrismaGymsRepository()
  const checkInService = new CheckInService(
    prismaCheckInsRepository,
    prismaGymRepository,
  )

  return checkInService
}
