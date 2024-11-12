import { NgModule } from '@angular/core';
import { BsNavbarComponent } from './component/bs-navbar/bs-navbar.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'share/shared.module';



@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
  ],
  exports: [
    BsNavbarComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ]
})
export class CoreModule { }
