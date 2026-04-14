// DTO -> Data Transfer Object

import { IsEmail, IsNumber, IsString, Min } from 'class-validator';

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

  @IsNumber()
  semester: number;

  @IsString()
  @MinLength(11)
  phone: string;
}
