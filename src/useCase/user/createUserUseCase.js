import { userRepository } from '../../dataBase/repositories/exportRepository.js'

export async function createUserUseCase({ name, office, age, company, cpf }) {
  await userRepository.createUser({
    name,
    office,
    age,
    company,
    cpf,
  })
}
