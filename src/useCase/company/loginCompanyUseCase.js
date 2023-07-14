import { companyRepository } from '../../dataBase/repositories/exportRepository.js'

export async function LoginCompanyUseCase({ cnpj, password }) {
  const { company } = await companyRepository.loginAuth({
    cnpj,
    password,
  })

  return {
    company,
  }
}
