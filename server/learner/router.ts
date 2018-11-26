import * as express from 'express'

import LearnerController from './controller'
import LearnerHandler from './handler'

const learnerController = new LearnerController()
const learnerHandler = new LearnerHandler(learnerController)

const router = express.Router()

router.get('/courses', learnerHandler.listAvailableCourses)

export default router
