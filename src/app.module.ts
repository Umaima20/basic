import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './employees/entities/employee.entity';
import { DepartmentModule } from './department/department.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'testing',
    password: 'abc123',
    database: 'random',
    entities: [EmployeeEntity],
    synchronize: true,
  }),
EmployeesModule,
DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
