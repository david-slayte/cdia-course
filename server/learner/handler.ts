import { Response } from 'express'

import LearnerController from './controller'

export default class LearnerHandler {
  private _learnerController: LearnerController

  constructor(learnerController: LearnerController) {
    this._learnerController = learnerController
  }

  public async listAvailableCourses(_, res: Response) {
    const courses = await this._learnerController.listCourses({
      onlyAvailable: true,
    })
    return res.render('learner/home', {
      courses,
    })
  }
}
