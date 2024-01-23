import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { catchError } from 'rxjs';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  create(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expenseService.create(createExpenseDto);
  }

  @Get()
  findAll() {
    return this.expenseService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    try {
      const expense = await this.expenseService.findOne(id);
      return { success : true, data : expense }
    } catch (error) {
      console.log(error)
      return { success : false, message : 'Unable to find employees data' }
    }
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateExpenseDto: UpdateExpenseDto
    ) {
      return this.expenseService.update(id, updateExpenseDto);
    }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number) {
    try {
      const expense = await this.expenseService.remove(id);
      return { success: true, message: `Expense with id ${id} has been deleted successfully`}
    } catch (error){
      console.log(error);
      return { success: false, message: 'Unable to delete expense data'};
    }
  }
}
