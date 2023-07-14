import { userRepository } from '../../dataBase/repositories/exportRepository.js'

export async function deleteUserUseCase({ cpf }) {
  await userRepository.deleteByCpf({
    cpf,
  })
}
