export interface Usuario {
  id: number;
  nome: string;
  idade: number;
  sexo: 'Masculino' | 'Feminino';
  dataNascimento?: Date;
}
