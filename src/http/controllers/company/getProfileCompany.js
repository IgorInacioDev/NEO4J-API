import z from 'zod'

import { getProfileCompanyUseCase } from '../../../useCase/company/getProfileCompanyUseCase.js'

export async function getProfileCompany(request, reply) {
  const needsInTheBody = z.object({
    cnpj: z.string(),
  })

  const { cnpj } = needsInTheBody.parse(request.query)

  const cnpjNumber = parseInt(cnpj)
  console.log(cnpjNumber)

  const { company } = await getProfileCompanyUseCase({
    cnpj: cnpjNumber,
  })

  return reply.status(201).send({
    company,
  })
}
