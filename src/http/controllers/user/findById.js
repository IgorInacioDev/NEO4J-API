import { z } from 'zod'
import { findByIdUseCase } from '../../../useCase/user/findByIdUseCase.js'

export async function findById(request, reply) {
  const needsInTheQuery = z.object({
    cpf: z.string(),
  })

  const { cpf } = needsInTheQuery.parse(request.query)
  console.log(cpf)
  const { user } = await findByIdUseCase({
    cpf,
  })

  return reply.status(201).send(user)
}
