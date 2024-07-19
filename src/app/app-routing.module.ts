import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { MainBodyComponent } from './main-body/main-body.component';

const routes: Routes = [
  {path:'',component:MainBodyComponent},
  {path:'admin/uploadImage',component:AdminPortalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
