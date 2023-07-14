import { app } from '../../../app.js'
import { createCompany } from './createCompany.js'
import { deleteCompany } from './deleteCompany.js'
import { findAffiliated } from './findAfiliatedCompany.js'
import { getProfileCompany } from './getProfileCompany.js'
import { loginCompany } from './loginCompany.js'
import { updateCompany } from './updateCompany.js'

export async function companyRoutes() {
  app.post('/api/company/create', createCompany)
  app.post('/api/company/login', loginCompany)
  app.patch('/api/company/update', updateCompany)
  app.get('/api/company/profile', getProfileCompany)
  app.get('/api/company/affiliated', findAffiliated)
  app.delete('/api/company', deleteCompany)
}
