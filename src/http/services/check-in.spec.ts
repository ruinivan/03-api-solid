import { expect, test, describe, beforeEach } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { CheckInService } from './check-in.service'

let checkInRepository: InMemoryCheckInsRepository
let sut: CheckInService

describe('Register Service', () => {
  beforeEach(() => {
    checkInRepository = new InMemoryCheckInsRepository()
    sut = new CheckInService(checkInRepository)
  })

  test('It should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      userId: '',
      gymId: '',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
