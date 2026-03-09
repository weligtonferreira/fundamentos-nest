import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  buscarUsuarios() {
    const usuario = this.userService.buscarUsuarios();

    return usuario;
  }

  @Get(':id')
  buscarUsuarioPorId(@Param('id', new ParseIntPipe()) id: number) {
    return this.userService.buscarUsuarioPorId(id);
  }

  @Post()
  criarUsuario(@Body() usuario) {
    return this.userService.criarUsuario(usuario);
  }

  @Put(':id')
  atualizarUsuario(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() usuario,
  ) {
    return this.userService.atualizarUsuario(id, usuario);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removerUsuario(@Param('id', new ParseIntPipe()) id: number) {
    this.userService.removerUsuario(id);
  }
}
