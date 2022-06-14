import { HttpClient } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserElement } from '../shared/models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  API_URL = 'http://localhost:3001/';

  constructor(private http: HttpClient) {}
  signup(data: UserElement): Observable<UserElement> {
    return this.http.post<UserElement>(this.API_URL + 'signup', data);
  }
  signin(data: any) {
    return this.http.post(this.API_URL + 'signin', data);
  }
}
