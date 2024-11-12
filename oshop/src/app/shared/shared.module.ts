import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductQuantityComponent } from './component/product-quantity/product-quantity.component';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CategoryService } from './services/category.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AppRoutingModule } from 'app/app-routing.module';
import { ValidatorsModule } from 'ngx-validators';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    CommonModule,
    NgbModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    ValidatorsModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    UserService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    ValidatorsModule,
  ]
})
export class SharedModule { }
