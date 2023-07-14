import { z } from 'zod'
import { createUserUseCase } from '../../../useCase/user/createUserUseCase.js'

export async function createUser(request, reply) {
  const needsInTheBody = z.object({
    name: z.string(),
    office: z.string(),
    age: z.number().min(18),
    company: z.string(),
    cpf: z.string(),
  })

  const { name, age, company, cpf, office } = needsInTheBody.parse(request.body)

  await createUserUseCase({
    name,
    office,
    age,
    company,
    cpf,
  })

  return reply.status(201).send()
}
