import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddEventComponent} from './add-event.component';
import {LeaveEventFormGuard} from './leave-event-form.guard';

const routes: Routes = [
  {
    path: '',
    component: AddEventComponent,
    canDeactivate: [LeaveEventFormGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEventRoutingModule {
}
