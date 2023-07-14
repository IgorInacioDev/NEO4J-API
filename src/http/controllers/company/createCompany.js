import z from 'zod'
import { createCompanyUseCase } from '../../../useCase/company/createCompanyUseCase.js'

export async function createCompany(request, reply) {
  const needsInTheBody = z.object({
    name: z.string(),
    cnpj: z.number(),
    addres: z.string(),
    phone: z.string(),
    password: z.string(),
  })

  const { name, cnpj, addres, phone, password } = needsInTheBody.parse(
    request.body,
  )

  await createCompanyUseCase({
    name,
    cnpj,
    addres,
    phone,
    password,
  })

  return reply.status(201).send()
}
