import { expect, test, describe, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyService } from './fetch-nearby-gyms.service'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyService

describe('Fetch Nearby Gyms Service', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyService(gymsRepository)
  })

  test('It should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: null,
      latitude: -15.7743349,
      longitude: -47.8937088,
      phone: null,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: null,
      latitude: -15.865083,
      longitude: -48.0288106,
      phone: null,
    })

    const { gyms } = await sut.execute({
      userLatitude: -15.7743349,
      userLongitude: -47.8937088,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
