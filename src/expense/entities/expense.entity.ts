import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('expense')
export class ExpenseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    paidTo: string;
  
    @Column()
    description: string;
  
    @Column()
    amount: number;
  
    @Column({ type: 'date' })
    date: Date;

}
