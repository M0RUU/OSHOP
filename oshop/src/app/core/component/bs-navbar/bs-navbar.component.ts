import { Component, OnInit } from '@angular/core';
import { AuthService } from 'share/services/auth.service';
import { AppUser } from 'share/models/app-user';
import { ShoppingCartService } from 'share/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'share/models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {
  appUser!: AppUser | null;
  cart$: Observable<ShoppingCart> | null = null;

  constructor(
    private authsv: AuthService,
    private shoppingCartService: ShoppingCartService) 
  { }

  async ngOnInit() {
    this.authsv.appUser$.subscribe(appUser => this.appUser = appUser)
    this.cart$ = await this.shoppingCartService.getCart() ?? null;
  }
  
  logout() {
    this.authsv.logout()
  }
}


