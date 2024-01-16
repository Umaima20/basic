import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { catchError } from 'rxjs';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    try {
      const employee = await this.employeesService.findOne(id);
      return { success : true, data : employee }
    } catch (error) {
      console.log(error)
      return { success : false, message : 'Unable to find employees data' }
    }
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateEmployeeDto: UpdateEmployeeDto
    ) {
      return this.employeesService.update(id, updateEmployeeDto);
    }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number) {
    try {
      const employee = await this.employeesService.remove(id);
      return { success: true, message: `Employee with id ${id} has been deleted successfully`}
    } catch (error){
      console.log(error);
      return { success: false, message: 'Unable to delete emloyees data'};
    }
  }
}
