import { Injectable } from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.authService.isUserAuthenticated) {
      this.router.navigateByUrl('/log-in');
    }
    return this.authService.isUserAuthenticated;
    //return true;
  }

}
