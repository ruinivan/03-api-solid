import fastify from 'fastify'
import { appRoutes } from './http/routes'

export const app = fastify()

app.register(appRoutes)

// MVC -> Model / View / Controller

// ORM - Object Relational Mapper
