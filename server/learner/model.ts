import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export default class Learner {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public uuid: string

  @Column()
  public productCode: string

  @Column()
  public productTitle: string

  @Column()
  public learnerUuid: string

  @Column()
  public orderUuid: string

  @Column()
  public score: number

  @Column()
  public dateCompleted: string

  @CreateDateColumn()
  public dateCreated: string
}
