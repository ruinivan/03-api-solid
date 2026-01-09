import type { FastifyInstance } from 'fastify'
import { registerController } from './controllers/register.controller'
import { authenticateController } from './controllers/authenticate.controller'
import { profileController } from './controllers/profile.controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerController)
  app.post('/sessions', authenticateController)

  /** Authenticaded */
  app.get('/me', profileController)
}
