import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public product : any = [];
  public grandTotal !: number ;

  constructor(private cartService : CartService){}

  ngOnInit(): void{
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }
  removeItem(item : any){
    this.cartService. removeCardItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
    
}
