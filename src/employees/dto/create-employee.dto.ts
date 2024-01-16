import { IsNumber, IsString } from "class-validator";

export class CreateEmployeeDto {

    @IsString()
    firstName: string;
  
    @IsString()
    lastName: string;
  
    @IsString()
    position: string;
  
    @IsNumber()
    salary: number;

}
