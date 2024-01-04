import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationWindowComponent } from './components/authorization-window/authorization-window.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',

    component: AppComponent,
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
