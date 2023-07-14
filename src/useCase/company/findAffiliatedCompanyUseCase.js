import { companyRepository } from '../../dataBase/repositories/exportRepository.js'

export async function findAffiliatedCompanyUseCase({ cnpj }) {
  const { fields } = await companyRepository.findAffiliated({
    cnpj,
  })

  return {
    fields,
  }
}
