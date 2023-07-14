import z from 'zod'
import { updateCompanyUseCase } from '../../../useCase/company/updateCompanyUseCase.js'

export async function updateCompany(request, reply) {
  const needsInTheBody = z.object({
    cnpj: z.string(),
    phone: z.string(),
  })

  const { cnpj, phone } = needsInTheBody.parse(request.body)

  const cnpjNumber = parseInt(cnpj)
  console.log(cnpjNumber)

  const { company } = await updateCompanyUseCase({
    cnpj: cnpjNumber,
    phone,
  })

  return reply.status(201).send({
    company,
  })
}
