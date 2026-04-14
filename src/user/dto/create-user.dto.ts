// DTO -> Data Transfer Object

import { Type } from 'class-transformer';
import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  course: string;

  @Type(() => Number)
  @IsNumber()
  semester: number;

  @IsString()
  @MinLength(11)
  phone: string;
}
