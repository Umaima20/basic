import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExpenseDto {
    @IsNotEmpty()@IsNumber()
    id: number;
  
    @IsString()
    description: string;

    @IsString()
    paidTo: string;
  
    @IsNumber()
    amount: number;
  
    @IsDateString()
    date: Date;
  
}
