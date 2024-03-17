import { Injectable } from '@angular/core';
import { User } from './user/user';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService  {
  private currentUserSubject!: BehaviorSubject<User>;
  public currentUser!: Observable<User>;
 userData:any=[]
 userdata:any = localStorage.getItem('currentUser')
 private loginarray = [
  {
    username:"Amol Sawant",
    email:"superadmin@gmail.com",
    password:"123",
    role:"superadmin"
  }
]
  constructor(private router:Router) {
    this.currentUserSubject = new BehaviorSubject<User>(
      this.userdata
     );
     this.currentUser = this.currentUserSubject.asObservable();
    this.userData = [
      {
        name:"amisha",
        email:"amisha@gmail.com",
        role:"Admin"
      },
      {
        name:"shalini",
        email:"shalini@gmail.com",
        role:"User"
      },
      {
        name:"maya",
        email:"maya@gmail.com",
        role:"User"
      }
    ]
   }
   public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
   userservice(item:any){
    this.userData.push(item)
    console.log("user",this.userData)
   }

   login(email: string, password: string): boolean {
    const user = this.loginarray.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser',JSON.stringify(user));
      this.currentUserSubject.next(user);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.router.navigate(['/login']);
    localStorage.removeItem('currentUser');
  }

}
