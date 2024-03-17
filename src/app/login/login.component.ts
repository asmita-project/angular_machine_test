import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule,MatButtonModule,MatInputModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;
  constructor(private route:Router,
    private service:UserService,
    private fb:FormBuilder
    ){

  }
  ngOnInit(): void {
   this.loginForm = this.fb.group({
   email:new FormControl("superadmin@gmail.com",[Validators.email,Validators.required]),
   password:new FormControl("123",[Validators.required])
   })
   this.loginForm.setValue({
    email:"superadmin@gmail.com",
    password:"123"
   })
  }
  login(): void {
    const formdata = {...this.loginForm.value}

    if (this.service.login(formdata.email,formdata.password)) {
      this.route.navigate(['/user'])
    } else {
      Swal.fire({
        title: "Incorrect Email and Password",
        text: "",
        icon: "error"
      });
    }
  }
}
