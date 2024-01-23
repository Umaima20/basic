import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './employees/entities/employee.entity';
import { ExpenseModule } from './expense/expense.module';
import { ExpenseEntity } from './expense/entities/expense.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'testing',
    password: 'abc123',
    database: 'random',
    entities: [EmployeeEntity, ExpenseEntity],
    synchronize: true,
  }),
EmployeesModule,
ExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
