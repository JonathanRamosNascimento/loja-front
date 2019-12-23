import { ResponseApi } from './../../models/response-api';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  userForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  ngOnInit() {
  }

  insert(user: User) {
    console.log(user);
    this.userService.insertOrUpdate(user).subscribe(res => {
      this.router.navigateByUrl('/');
    });
  }
}
