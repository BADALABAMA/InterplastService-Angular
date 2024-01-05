import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationWindowComponent } from './components/authorization-window/authorization-window.component';

import { AppContainerComponent } from './components/app-container/app-container.component';
const routes: Routes = [
  {
    path: '',

    component: AppContainerComponent,
  },
  {
    path: 'authorization',
    component: AuthorizationWindowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
