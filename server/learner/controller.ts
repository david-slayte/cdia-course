import { getConnection, LessThan, Repository } from 'typeorm'
import Learner from './model'

let learnerRepository: Repository<Learner>

const initialize = () => {
  const connection = getConnection()
  learnerRepository = connection.getRepository(Learner)
}

export default class LearnerController {
  public async listCourses({
    onlyAvailable = true,
  }: {
    onlyAvailable: boolean;
  }): Promise<Learner[]> {
    if (!learnerRepository) {
      initialize()
    }

    if (onlyAvailable) {
      return learnerRepository.find({
        dateCompleted: LessThan(Date.now().toString()),
      })
    }

    return learnerRepository.find()
  }
}
