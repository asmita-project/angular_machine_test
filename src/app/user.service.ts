import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService  {
 loginarray:any=[]
  constructor() {
    this.loginarray = [
      {
        username:"Amol Sawant",
        email:"superadmin@gmail.com",
        password:"123",
        role:"superadmin"
      }
    ]
   }


}
