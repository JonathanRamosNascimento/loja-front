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

  public mask = ['(', /[1-9]/, /\d/, ')', /\d/, /\d/, /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  userForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    password: ['', [Validators.required]],
    password1: ['', [Validators.required]],
  })

  ngOnInit() {
  }

  insert(user: User) {
    if(this.userForm.controls['password'].value === this.userForm.controls['password1'].value) {
      this.userService.insertOrUpdate(user).subscribe(res => {
        this.router.navigateByUrl('/');
      });
    } else {
      alert("Senhas diferentes.")
    }
    
  }
}
