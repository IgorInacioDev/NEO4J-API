import z from 'zod'
import { LoginCompanyUseCase } from '../../../useCase/company/loginCompanyUseCase.js'

export async function loginCompany(request, reply) {
  const needsInTheBody = z.object({
    cnpj: z.number(),
    password: z.string(),
  })

  const { cnpj, password } = needsInTheBody.parse(request.body)

  const cnpjNumber = parseInt(cnpj)
  console.log(cnpjNumber)

  const { company } = await LoginCompanyUseCase({
    cnpj: cnpjNumber,
    password,
  })

  return reply.status(200).send({
    company,
  })
}
