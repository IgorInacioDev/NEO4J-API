import { session } from '../../dataBase.js'

export class Neo4jCompanyRepository {
  async createCompany({ name, cnpj, addres, phone, password }) {
    const findByCnpj = await session.run(
      `MATCH (n:Person {cnpj: '${cnpj}'}) RETURN n`,
    )

    if (findByCnpj.records.length > 0) {
      throw new Error('Error! CNPJ already registered')
    }

    await session.run(
      'CREATE (n:Company {name: $name, cnpj: $cnpj, password: $password,addres: $addres, phone: $phone})',
      { name, cnpj, addres, phone, password },
    )
  }

  async updateCompany({ cnpj, phone }) {
    console.log(cnpj, phone)
    await session.run(
      `MATCH (n:Company {cnpj: ${cnpj}}) SET n.phone = '${phone}'`,
    )

    const response = await session.run(
      `MATCH (n:Company {cnpj: ${cnpj}}) RETURN n`,
    )
    if (response.records.length === 0) {
      throw new Error('Error! No user found')
    }
    const company = response.records[0]._fields[0].properties

    return {
      company,
    }
  }

  async getProfileCompany({ cnpj }) {
    const response = await session.run(
      `MATCH (n:Company {cnpj: ${cnpj}}) RETURN n`,
    )
    if (response.records.length === 0) {
      throw new Error('Error! No user found')
    }
    const company = response.records[0]._fields[0].properties

    return {
      company,
    }
  }

  async deleteCompany({ cnpj }) {
    await session.run(`MATCH (n:Company {cnpj: ${cnpj}}) DELETE n`)
  }

  async findAffiliated({ cnpj }) {
    const response = await session.run(
      `MATCH (c:Company {cnpj: $cnpj})
      OPTIONAL MATCH (c)<-[r]-(relatedNode)
      RETURN relatedNode`,
      { cnpj },
    )

    const fields = response.records.map(
      (record) => record.get('relatedNode').properties,
    )
    console.log(fields)

    return {
      fields,
    }
  }

  async loginAuth({ cnpj, password }) {
    const companyVerify = await session.run(
      `MATCH (n:Company {cnpj: ${cnpj}}) RETURN n`,
    )
    if (companyVerify.records.length === 0) {
      throw new Error('Error! No user found')
    }

    const passwordVerify =
      companyVerify.records[0]._fields[0].properties.password
    const company = companyVerify.records[0]._fields[0].properties

    console.log(passwordVerify, company)

    if (passwordVerify !== password) {
      throw new Error({
        message: 'Password Incorrect',
      })
    }

    return {
      company,
    }
  }
}
