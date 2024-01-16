import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeesRepository } from './employees.repository';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(EmployeesRepository)
    private readonly employeeRepository : EmployeesRepository,
  ) {}


  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.employeeRepository.createEmployee(createEmployeeDto);
    return {
      success: true, data: employee
    }
  }

  async findAll() {
    const getEmployees = await this.employeeRepository.find();
    return getEmployees;
    //return `This action returns all employees`;
  }

  async findOne(id: number) {
    return this.employeeRepository.findById(id);
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeRepository.updateEmployee(id, updateEmployeeDto)
  }

  async remove(id: number) {
    return this.employeeRepository.removeEmployee(id);
  }
}
