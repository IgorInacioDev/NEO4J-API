import { Neo4jUserRepository } from './userRepository.js'
import { Neo4jCompanyRepository } from './companyRepository/companyRepository.js'

export const userRepository = new Neo4jUserRepository()
export const companyRepository = new Neo4jCompanyRepository()
