import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from '../Services/product.service';
import { IProduct } from '../Shared_Interfaces/IProduct';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{ //implements OnInit {

  // ProductList:IProduct[]=[]
  // base64Image: any;
  // myReader: any
  // constructor(private services : ProductService , private sanitizer: DomSanitizer) { }

  // imageSource:any;
  // getAllCart()
  // {
  //   console.log("ok")
  //  return this.services.getProduct().subscribe(data=>{this.ProductList=data})
  // }
  // // .onloadend = (e:any) =>{ this.base64Image = this.sanitizer.bypassSecurityTrustUrl(this.myReader.result);
  // //   console.log(this.base64Image);}
  // ngOnInit(): void {
  //   // this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpg;base64, ${image}`);
   

  //   this.getAllCart();
   }

