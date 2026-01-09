import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchUserCheckInsHistoryService } from '../fetch-user-check-ins-history.service'

export function fetchUserCheckInsHistoryServiceFactory() {
  const prismaCheckInsRepository = new PrismaCheckInsRepository()
  const fetchUserCheckInsHistoryService = new FetchUserCheckInsHistoryService(
    prismaCheckInsRepository,
  )

  return fetchUserCheckInsHistoryService
}
