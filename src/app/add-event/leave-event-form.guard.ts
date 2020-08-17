import {Injectable} from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AddEventProviderModule} from './add-event-provider.module';
import {AddEventComponent} from './add-event.component';

@Injectable({
  providedIn: AddEventProviderModule
})
export class LeaveEventFormGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: AddEventComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return (component.form.dirty) ? confirm('You have unsaved changes. Click Ok to leave the page and loose the changes or Cancel to stay on page and continue editing.') : true;
  }

}
