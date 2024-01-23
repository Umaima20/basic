import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ExpenseEntity } from './entities/expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpenseRepository extends Repository<ExpenseEntity> {
  constructor(private dataSource: DataSource) {
    super(ExpenseEntity, dataSource.createEntityManager());
  }

  async createExpense(createExpenseDto: CreateExpenseDto){
    try {
      return this.save(createExpenseDto);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return this.find();
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number) {
    try{
      return this.findOne({
        where: {
          id,
        },
      });

    } catch (error) {
        throw error;
    }
  }

  async updateExpense(id: number, updateExpenseDto : UpdateExpenseDto) {
    try{
      const expense = await this.findById(id);
      const updateExpense = { ...expense, ...updateExpenseDto};
      console.log(expense);
      return this.save(updateExpense);
    } catch (error) {
        throw error;
    }
  }

  async removeExpense(id: number) {
    try{
      const expense = await this.findById(id);
      
      return this.remove(expense);
    } catch (error) {
        throw error;
    }
  }

}