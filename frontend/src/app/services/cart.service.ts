import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../shared/models/carts';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cartsItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  private cartSubject:BehaviorSubject<Cart>= new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem)
      return;
    this.cart.items.push(new CartItem(food));

  }

  removeFromCart(foodId:string):void{
    
  }
}
