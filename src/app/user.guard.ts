import { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
//   alert(this.service.currentUserValue.email)
//   if (this.service.currentUserValue) {
//     this.router.navigate(['/user']);
//     alert("working")
//     return true;
//   }
//   else{
//         this.router.navigate(['/login']);
//      return false;
//   }

// }
  return true;
};
