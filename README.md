# NEO4J-API-ROUTES DOCUMENTATION

Company Routes
Criação de Empresa
Rota: POST /api/company/create
Função: createCompany
Cria uma nova empresa.

Parâmetros de Requisição
Parâmetro	Tipo	Descrição
name	string	Nome da empresa
cnpj	number	CNPJ da empresa
address	string	Endereço da empresa
phone	string	Telefone da empresa
password	string	Senha da empresa
Resposta de Sucesso
Código: 201 - Created
Login de Empresa
Rota: POST /api/company/login
Função: loginCompany
Realiza o login de uma empresa.

Parâmetros de Requisição
Parâmetro	Tipo	Descrição
cnpj	number	CNPJ da empresa
password	string	Senha da empresa
Resposta de Sucesso
Código: 200 - OK
Corpo da resposta:
json
Copy code
{
  "company": {
    "name": "Nome da Empresa",
    "cnpj": "CNPJ da Empresa",
    "address": "Endereço da Empresa",
    "phone": "Telefone da Empresa"
  }
}
Atualização de Empresa
Rota: PATCH /api/company/update
Função: updateCompany
Atualiza os dados de uma empresa.

Parâmetros de Requisição
Parâmetro	Tipo	Descrição
cnpj	string	CNPJ da empresa
phone	string	Telefone da empresa
Resposta de Sucesso
Código: 201 - Created
Corpo da resposta:
json
Copy code
{
  "company": {
    "name": "Nome da Empresa",
    "cnpj": "CNPJ da Empresa",
    "address": "Endereço da Empresa",
    "phone": "Telefone da Empresa"
  }
}
Perfil da Empresa
Rota: GET /api/company/profile
Função: getProfileCompany
Obtém o perfil de uma empresa.

Parâmetros de Requisição
Parâmetro	Tipo	Descrição
cnpj	string	CNPJ da empresa
Resposta de Sucesso
Código: 200 - OK
Corpo da resposta:
json
Copy code
{
  "company": {
    "name": "Nome da Empresa",
    "cnpj": "CNPJ da Empresa",
    "address": "Endereço da Empresa",
    "phone": "Telefone da Empresa"
  }
}
Funcionarios Afiliadas
Rota: GET /api/company/affiliated
Função: findAffiliated
Obtém a lista de funcionarios afiliadas a uma empresa.

Parâmetros de Requisição
Parâmetro	Tipo	Descrição
cnpj	string	CNPJ da empresa
Resposta de Sucesso
Código: 200 - OK
Corpo da resposta:
json
Copy code
{
  "fields": [
    {
      "name": "Nome do Funcionário",
      "office": "Cargo do Funcionário",
      "age": "Idade do Funcionário",
      "cpf": "CPF do Funcionário"
    }
  ]
}
Exclusão de Empresa
Rota: DELETE /api/company
Função: deleteCompany
Exclui uma empresa.

Parâmetros de Requisição
Parâmetro	Tipo	Descrição
cnpj	string	CNPJ da empresa
Resposta de Sucesso
Código: 201 - Created
User Routes
Criação de Usuário
Rota: POST /api/user
Função: createUser
Cria um novo usuário.

Parâmetros de Requisição
Parâmetro	Tipo	Descrição
name	string	Nome do usuário
office	string	Cargo do usuário
age	number	Idade do usuário
company	string	Empresa do usuário
cpf	string	CPF do usuário
Resposta de Sucesso
Código: 201 - Created
Atualização de Usuário
Rota: PATCH /api/user/update
Função: updateUser
Atualiza os dados de um usuário.

Parâmetros de Requisição
Parâmetro	Tipo	Descrição
cpf	string	CPF do usuário
company	string	Empresa do usuário
Resposta de Sucesso
Código: 201 - Created
Busca de Usuário por CPF
Rota: GET /api/use/profile
Função: findById
Obtém os dados de um usuário a partir do CPF.

Parâmetros de Requisição
Parâmetro	Tipo	Descrição
cpf	string	CPF do usuário
Resposta de Sucesso
Código: 200 - OK
Corpo da resposta:
json
Copy code
{
  "user": {
    "name": "Nome do Usuário",
    "office": "Cargo do Usuário",
    "age": "Idade do Usuário",
    "company": "Empresa do Usuário",
    "cpf": "CPF do Usuário"
  }
}
Exclusão de Usuário
Rota: DELETE /api/user
Função: deleteUser
Exclui um usuário.

Parâmetros de Requisição
Parâmetro	Tipo	Descrição
cpf	string	CPF do usuário
Resposta de Sucesso
Código: 200 - OK





