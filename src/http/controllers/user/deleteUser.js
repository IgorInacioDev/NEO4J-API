import { z } from 'zod'
import { deleteUserUseCase } from '../../../useCase/user/deleteUserUseCase.js'

export async function deleteUser(request, reply) {
  const needsInTheQuery = z.object({
    cpf: z.string(),
  })

  const { cpf } = needsInTheQuery.parse(request.query)
  console.log(cpf)
  await deleteUserUseCase({
    cpf,
  })

  return reply.status(200).send()
}
