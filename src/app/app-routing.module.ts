import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {HomeComponent} from './home/home.component';
import {AddEventComponent} from './add-event/add-event.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'add-event',
      loadChildren: () => import('./add-event/add-event.module').then(m => m.AddEventModule)
    },
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: '**',
      pathMatch: 'full',
      component: ErrorComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
