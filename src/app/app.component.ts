import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule} from '@angular/router';
import { ConteudoUiComponent } from './components/conteudo-ui/conteudo-ui.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    NavbarComponent,
    FooterComponent,
    ConteudoUiComponent,
    ReactiveFormsModule,
    FormsModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.getUser();
  }

  constructor(private userService: UserService){}

  getUser(){
    const user = localStorage.getItem('user');
    this.userService.setUser(user ? JSON.parse(user) : undefined);
  }



}
