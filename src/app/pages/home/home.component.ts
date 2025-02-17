import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserGit } from '../../models/userGit';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  user: UserGit | undefined;
  username: string = '';

  constructor(private userService: UserService, private toastr: ToastrService){}

  getGitUser(){
    this.userService
    .getGitUser(this.username)
    .subscribe((response: UserGit) => {
      this.user = response;
    }, (error) => {
      this.toastr.error(error.error.message);
      this.username = '';
    });
  }

}
