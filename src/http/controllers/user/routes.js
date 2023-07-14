import { createUser } from './createUser.js'
import { deleteUser } from './deleteUser.js'
import { findById } from './findById.js'
import { updateUser } from './updateUser.js'

export async function userRoutes(app) {
  app.post('/api/user', createUser)
  app.patch('/api/user/update', updateUser)
  app.get('/api/use/profile', findById)
  app.delete('/api/user', deleteUser)
}
