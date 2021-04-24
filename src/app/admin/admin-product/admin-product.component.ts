
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from 'src/app/Shared_Interfaces/IProduct';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {


  IsaAppear = false
  productData: IProduct[]
  productDa = new IProduct()


  constructor(private services: ProductService, private sanitizer: DomSanitizer) { }
  
  onAppear() {
    this.IsaAppear = true;
  }
  //------------------------------
  getAllCart() {
    console.log("product")
    return this.services.getProduct().subscribe(data => { this.productData = data })
  }
  //-----------------------------------
  onSubmit() {

    return this.services.postProduct(this.productDa).subscribe(data => {
      this.productDa = data
      console.log("Added")

    })
  }


  ngOnInit(): void {

    this.getAllCart();
  }

}
