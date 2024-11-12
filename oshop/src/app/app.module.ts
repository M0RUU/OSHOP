import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { AppComponent } from './app.component';
import { environment } from './environment';
import { ProductsComponent } from './shopping/component/products/products.component';
import { LoginComponent } from './core/component/login/login.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { AngularFireModule } from '@angular/fire/compat';
import { SharedModule } from 'share/shared.module';
import { AdminModule } from './admin/admin.module';
import { ShoppingModule } from './shopping/shopping.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
    ]),
  ],
  providers: [
    AdminAuthGuardService,
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
