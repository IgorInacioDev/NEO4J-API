import { z } from 'zod'
import { updateUserUseCase } from '../../../useCase/user/updateUserUseCase.js'

export async function updateUser(request, reply) {
  const needsInTheBody = z.object({
    cpf: z.string(),
    office: z.string(),
  })

  const { office, cpf } = needsInTheBody.parse(request.body)

  await updateUserUseCase({
    office,
    cpf,
  })

  return reply.status(201).send()
}
