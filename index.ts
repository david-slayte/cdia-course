import dotenv from 'dotenv'
dotenv.config()
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import app from './server'
import { LearnerRouter } from './server/learner'

const env = process.env
const PORT = env.PORT || 3000
const DB = {
  name: 'cdia-course',
  host: env.DB_HOST,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
};

(async function initializeServer() {
  try {
    await createConnection({
      type: 'mysql',
      database: DB.name,
      host: DB.host,
      username: DB.username,
      password: DB.password,
    })

    app.use('/learners', LearnerRouter)

    app.listen(PORT, (serverStartError) => {
      if (serverStartError) {
        throw serverStartError
      }

      // tslint:disable-next-line:no-console
      console.log(`Server running on ${PORT}`)
    })
  } catch (serverInitError) {
    // tslint:disable-next-line:no-console
    console.error(serverInitError)
    throw serverInitError
  }
})()
