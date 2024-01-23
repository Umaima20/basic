import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpenseRepository } from './expense.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(ExpenseRepository)
    private readonly expenseRepository : ExpenseRepository,
  ) {}


  async create(createExpenseDto: CreateExpenseDto) {
    const expense = await this.expenseRepository.createExpense(createExpenseDto);
    return {
      success: true, data: expense
    }
  }

  async findAll() {
    const getEmployees = await this.expenseRepository.find();
    return getEmployees;
  }

  async findOne(id: number) {
    return this.expenseRepository.findById(id);
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return this.expenseRepository.updateExpense(id, updateExpenseDto)
  }

  async remove(id: number) {
    return this.expenseRepository.removeExpense(id);
  }
}
