import { companyRepository } from '../../dataBase/repositories/exportRepository.js'

export async function updateCompanyUseCase({ cnpj, phone }) {
  const { company } = await companyRepository.updateCompany({
    cnpj,
    phone,
  })

  return {
    company,
  }
}
