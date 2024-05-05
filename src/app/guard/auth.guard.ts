import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { AuthServiceService } from '../service/auth_service/auth-service.service';
import { inject } from '@angular/core';
import { catchError, map } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService)
  const router = inject(Router);
  
 const lo =authService.getActualUser().pipe(
  map((user) => {
    if (user!= null )return true;
     return router.parseUrl('/login')}
   ),
 )
 

 return lo; 
};
