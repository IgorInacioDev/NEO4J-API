import { userRepository } from '../../dataBase/repositories/exportRepository.js'

export async function updateUserUseCase({ office, cpf }) {
  await userRepository.updateUser({
    cpf,
    office,
  })
}
