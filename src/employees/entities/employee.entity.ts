import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  position: string;

  @Column()
  salary: number;


}
