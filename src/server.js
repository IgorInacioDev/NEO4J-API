import { app } from './app.js'
import { runDB } from './dataBase/dataBase.js'
import { env } from './env/index.js'

await runDB()

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`✔ HTTP server run in ${env.PORT}`)
  })
