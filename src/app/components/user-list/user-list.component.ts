import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  atual: number = 0;
  quantidade: number = 10;

  constructor(
    private userService: UserService
  ) { }

  users: any;

  ngOnInit() {
    this.findAll(this.atual, this.quantidade);
  }

  page(n) {
    this.atual += n;
    this.findAll(this.atual, this.quantidade);
  }

  findAll(autal, quantidade) {
    this.userService.findAll(autal, quantidade).subscribe((res) => {
      this.users = res;
    });
  }

  delete(i) {
    this.userService.delete(i).subscribe(() => {
      this.findAll(this.atual, this.quantidade);
    });
  }

}
