import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private showAuthorizationWindowSource = new BehaviorSubject<boolean>(false);
  showAuthorizationWindow$ = this.showAuthorizationWindowSource.asObservable();
}
