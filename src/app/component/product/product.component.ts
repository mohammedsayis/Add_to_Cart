import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  public productList : any ;
  constructor(private api : ApiService , private cartSernice : CartService){}
  ngOnInit():void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a:any)=> {
        Object.assign(a,{quantity:1, total:a.price})
        
      });
    })
  }

  addToCart(item:any){
    
    this.cartSernice.addToCart(item)
    
  }

}
