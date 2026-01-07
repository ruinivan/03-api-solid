import { expect, test, describe, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymService } from './create-gym.service'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymService

describe('Register Service', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymService(gymsRepository)
  })

  test('It should be able to register', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      latitude: -15.7743349,
      longitude: -47.8937088,
      phone: null,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
