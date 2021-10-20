/*
 *
 *  * Copyright (c) 2020. ALIS.
 *  * Proprietary source code; any copy or modification is prohibited.
 *  *
 *  *
 *  *
 *
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Token} from '../models/user';


@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Token[]>(`${environment.backendPrefix}/api/v1/users`);
  }

  toggleDisableUser(userId: number) {
    return this.http.get(`${environment.backendPrefix}/api/v1/users/activate/${userId}`);
  }
}
