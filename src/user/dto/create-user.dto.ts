// DTO -> Data Transfer Object

import { IsEmail, IsNumber, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Min(8)
  password: string;

  @IsString()
  curse: string;

  @IsNumber()
  semester: number;

  @IsString()
  @Min(11)
  phone: string;
}
