/*
 *
 *  * Copyright (c) 2020. ALIS.
 *  * Proprietary source code; any copy or modification is prohibited.
 *  *
 *  *
 *  *
 *
 */


export class TokenUser {
  id: number;
  admin: boolean;
  username: string;
  password: string;
  lang: string;
  rememberMe: boolean;
  permissions: string[];
}

export class Token {
  authenticated: boolean;
  authToken: string;
  user: TokenUser;
  refreshToken: string;
}

export class User {
  activeUser: boolean;
  birthDate: string;
  birthPlace: string;
  createdAt: string;
  email: string;
  firstName: string;
  genre: number;
  id: number;
  lastName: string;
  nni: string;
  passportNumbers: string;
  username: string;
}
