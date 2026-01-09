import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { FetchNearbyGymsService } from '../fetch-nearby-gyms.service'

export function fetchNearbyGymsServiceFactory() {
  const prismaGymRepository = new PrismaGymsRepository()
  const fetchNearbyGymsService = new FetchNearbyGymsService(prismaGymRepository)

  return fetchNearbyGymsService
}
