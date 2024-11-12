import { NgModule } from '@angular/core';
import { AdminProductsComponent } from './component/admin-products/admin-products.component';
import { AdminOrdersComponent } from './component/admin-orders/admin-orders.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { SharedModule } from 'share/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'share/services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';



@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
    ])
  ]
})
export class AdminModule { }
