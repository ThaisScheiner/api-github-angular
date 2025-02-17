import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',

  imports: [MatButtonModule, UserCardComponent, ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})


export class UsersComponent implements OnInit {
  //users: string[] = ['Fulano ', 'Cicrano', 'Beltrano'];

  userSelecionado: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initilizeForm();
  }

  initilizeForm(){
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(110)]],
    });
  }

  SubmitForm(){
    if(this.userForm.valid){
      this.users.push(this.userForm.value);
      this.userForm.reset();
    }
  }

  users: User[] = [
    {
      nome: 'Fulano',
      idade: 25
    },
    {
      nome: 'Cicrano',
      idade: 19
    },
    {
      nome: 'Beltrano',
      idade: 45
    },
    {
      nome: 'Maria',
      idade: 32
    },

  ];

  infoUserSelecionado(user: User){
    this.userSelecionado = user;
    this.userService.setUser(user); //usuario disponivel para qualquer local da aplicação
  }


  /*
  navigate(user: string) {
    this.router.navigate(['/users', user]);
  }
  */
}
