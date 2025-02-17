import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  username: string | null = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getNome();
  }

  getNome(){
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }
}
