import z from 'zod'

import { findAffiliatedCompanyUseCase } from '../../../useCase/company/findAffiliatedCompanyUseCase.js'

export async function findAffiliated(request, reply) {
  const needsInTheBody = z.object({
    cnpj: z.string(),
  })

  const { cnpj } = needsInTheBody.parse(request.query)

  const cnpjNumber = parseInt(cnpj)
  console.log(cnpjNumber)

  const { fields } = await findAffiliatedCompanyUseCase({
    cnpj: cnpjNumber,
  })

  return reply.status(201).send({
    fields,
  })
}
