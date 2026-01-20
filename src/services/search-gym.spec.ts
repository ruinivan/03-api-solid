import { expect, test, describe, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymService } from './search-gym.service'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymService

describe('Search Gym Service', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymService(gymsRepository)
  })

  test('It should be able to fetch gyms search', async () => {
    await gymsRepository.create({
      title: 'JavaScript Gym',
      description: null,
      latitude: -15.7743349,
      longitude: -47.8937088,
      phone: null,
    })

    await gymsRepository.create({
      title: 'TypeScript Gym',
      description: null,
      latitude: -15.7743349,
      longitude: -47.8937088,
      phone: null,
    })

    const { gyms } = await sut.execute({
      query: 'JavaScript',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'JavaScript Gym' })])
  })

  test('It should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `JavaScript Gym ${i}`,
        description: null,
        latitude: -15.7743349,
        longitude: -47.8937088,
        phone: null,
      })
    }

    const { gyms } = await sut.execute({
      query: 'JavaScript',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'JavaScript Gym 21' }),
      expect.objectContaining({ title: 'JavaScript Gym 22' }),
    ])
  })
})
