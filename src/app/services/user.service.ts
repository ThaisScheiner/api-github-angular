import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UserGit } from '../models/userGit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = environment.apiUrl;

  user: User | undefined;

  constructor(private httpClient: HttpClient) { }

  getGitUser(username: string){
    return this.httpClient.get<UserGit>(this.baseUrl + 'users/' + username ).pipe(
      map((response: UserGit) => {
        return response;
      })
    );
  }


  setUser(user: User | undefined) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  getUser() {
    return this.user;
  }
}
