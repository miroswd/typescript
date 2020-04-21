/**
 * Para criar o usuário: name,email,password
 */

interface TechObject {
  title?: string;
  experience?: number;
}

interface CreateUserData {
  // Quais são os dados que preciso para criar um usuário
  // opcional, colocar um ponto de interrogação antes dos 2 pontos

  name?: string;
  email: string;
  password: string | number;
  techs: Array<string | TechObject>;
  friends?: string[];
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
