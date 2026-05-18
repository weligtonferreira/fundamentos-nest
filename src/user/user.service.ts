import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const salts = 8;
    const encrytedPassword = bcrypt.hashSync(createUserDto.password, salts);

    const user = {
      ...createUserDto,
      password: encrytedPassword,
    };

    return this.userRepository.save(user);
  }

  // async e await são executados por padrão pelo nest
  // quando se usa diretamente o return
  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOneBy({ id });

    if (user == null) {
      throw new NotFoundException('User not found!');
    }

    return user;
  }

  findByEmailForAuthentication(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }
}
