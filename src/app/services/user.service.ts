import { User } from './../models/user';
import { LOJA_API } from './loja.api';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  insertOrUpdate(user: User) {
    if (user.id != null) {
      return this.http.put(`${LOJA_API}/users/${user.id}`, user);
    } else {
      return this.http.post(`${LOJA_API}/users`, user);
    }
  }

  findAll() {
    return this.http.get(`${LOJA_API}/users`);
  }

  findById(id: number) {
    return this.http.get(`${LOJA_API}/users/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${LOJA_API}/users/${id}`);
  }
}