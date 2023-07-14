import { companyRepository } from '../../dataBase/repositories/exportRepository.js'

export async function getProfileCompanyUseCase({ cnpj }) {
  const { company } = await companyRepository.getProfileCompany({
    cnpj,
  })

  return {
    company,
  }
}
