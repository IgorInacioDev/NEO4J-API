import z from 'zod'
import { deleteCompanyUseCase } from '../../../useCase/company/deleteCompanyUseCase.js'

export async function deleteCompany(request, reply) {
  const needsInTheBody = z.object({
    cnpj: z.string(),
  })

  const { cnpj } = needsInTheBody.parse(request.query)

  const cnpjNumber = parseInt(cnpj)
  console.log(cnpjNumber)

  await deleteCompanyUseCase({
    cnpj: cnpjNumber,
  })

  return reply.status(201).send()
}
