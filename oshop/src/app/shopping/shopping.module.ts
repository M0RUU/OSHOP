import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './component/products/products.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { ShippingFormComponent } from './component/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './component/shopping-cart-summary/shopping-cart-summary.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'share/services/auth-guard.service';
import { SharedModule } from 'share/shared.module';
import { ProductFilterComponent } from './component/product-filter/product-filter.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    ProductFilterComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },

    ])
  ]
})
export class ShoppingModule { }
