import type { FastifyRequest, FastifyReply } from 'fastify'
import { getUserProfileServiceFactory } from '../services/factories/get-user-profile-service.factory'

export async function profileController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const getUserProfile = getUserProfileServiceFactory()

  const { user } = await getUserProfile.execute({ userId: request.user.sub })

  return reply.status(200).send({
    user: {
      ...user,
      password_hash: undefined,
    },
  })
}
