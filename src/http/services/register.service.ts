import { hash } from 'bcryptjs'
import type { UsersRepository } from '@/repositories/prisma/users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

interface RegisterServiceRequest {
  name: string
  email: string
  password: string
}

// SOLID

// D -> Dependency Inversion Principle

export class RegisterService {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: RegisterServiceRequest) {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    await this.usersRepository.create({ name, email, password_hash })
  }
}
