import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { EmployeeEntity } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesRepository extends Repository<EmployeeEntity> {
  constructor(private dataSource: DataSource) {
    super(EmployeeEntity, dataSource.createEntityManager());
  }

  async createEmployee(createEmployeeDto: CreateEmployeeDto){
    try {
      return this.save(createEmployeeDto);
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

  async updateEmployee(id: number, updateEmployeeDto : UpdateEmployeeDto) {
    try{
      const employee = await this.findById(id);
      const updateEmployee = { ...employee, ...updateEmployeeDto};
      console.log(employee);
      return this.save(updateEmployee);
    } catch (error) {
        throw error;
    }
  }

  async removeEmployee(id: number) {
    try{
      const employee = await this.findById(id);
      
      return this.remove(employee);
    } catch (error) {
        throw error;
    }
  }

}