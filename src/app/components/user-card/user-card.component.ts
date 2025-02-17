import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  imports: [RouterModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user: User = {
    nome: "",
    idade: 0,
  };

  @Output() userInfoEmitter = new EventEmitter<User>();

  RetornarDados(){
    this.userInfoEmitter.emit(this.user);
  }
}
  