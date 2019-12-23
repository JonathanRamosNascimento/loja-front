import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  users: any;

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    let teste = this.userService.findAll();
    teste.subscribe((res) => {
      this.users = res;
    });
  }

  delete(i) {
    this.userService.delete(i).subscribe(() =>{
      this.findAll();
    });
  }

}
