import { userRepository } from '../../dataBase/repositories/exportRepository.js'

export async function findByIdUseCase({ cpf }) {
  const { user } = await userRepository.findByCpf({
    cpf,
  })

  return {
    user,
  }
}
