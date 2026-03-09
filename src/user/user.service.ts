import { Injectable, NotFoundException } from '@nestjs/common';

import { Usuario } from './dto/user.dto';

@Injectable()
export class UserService {
  usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Ana',
      idade: 22,
      sexo: 'Feminino',
      dataNascimento: new Date('2005-10-23'),
    },
    {
      id: 2,
      nome: 'Anastácia',
      idade: 62,
      sexo: 'Feminino',
    },
  ];

  buscarUsuarios() {
    return this.usuarios;
  }

  buscarUsuarioPorId(userId: number) {
    const usuario = this.usuarios.find((user) => user.id == userId);
    console.log(usuario);
    console.log(typeof usuario);

    if (!usuario) {
      throw new NotFoundException(
        `Usuário com id: ${userId} não foi encontrado!`,
      );
    }

    return usuario;
  }

  criarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  atualizarUsuario(userId: number, usuario: Partial<Usuario>) {
    const usuarioIndex = this.usuarios.findIndex((user) => user.id == userId);

    const usuarioAtualizado = {
      id: usuario.id ? usuario.id : this.usuarios[usuarioIndex].id,
      idade: usuario.idade ? usuario.idade : this.usuarios[usuarioIndex].idade,
      nome: usuario.nome ? usuario.nome : this.usuarios[usuarioIndex].nome,
      sexo: usuario.sexo ? usuario.sexo : this.usuarios[usuarioIndex].sexo,
      dataNascimento: usuario.dataNascimento
        ? usuario.dataNascimento
        : this.usuarios[usuarioIndex].dataNascimento,
    };

    this.usuarios[usuarioIndex] = usuarioAtualizado;

    return usuarioAtualizado;
  }

  removerUsuario(userId: number) {
    this.buscarUsuarioPorId(userId);

    const novosUsuarios = this.usuarios.filter((user) => user.id != userId);

    this.usuarios = novosUsuarios;
  }
}
