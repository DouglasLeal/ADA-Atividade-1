import { inject } from "@angular/core";
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { LocalStorageUtil } from '../utils/local-storage-util';



export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const user = LocalStorageUtil.getLoggedUser();

  if(user){
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
