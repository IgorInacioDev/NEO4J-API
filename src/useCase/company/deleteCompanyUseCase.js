import { companyRepository } from '../../dataBase/repositories/exportRepository.js'

export async function deleteCompanyUseCase({ cnpj }) {
  await companyRepository.deleteCompany({
    cnpj,
  })
}
