import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../Services/category.service';
import { ProductService } from '../Services/product.service';
import { ICategory } from '../Shared_Interfaces/Category';
import { IProduct } from '../Shared_Interfaces/IProduct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  starRating = 0;
  currentRate = 3.14;
  ProductList: IProduct[] = []
 
  prodId: any

  constructor(private services: ProductService, private router: Router, private active: ActivatedRoute , private catServices:CategoryService) { }

  goToDetails(product: any) {
    let prodId = product.ID
    // let prodId = product.id
    console.log(product.ID)
    //  this.router.navigate(['/Home',{id:this.prodId}])
    this.router.navigate(['/Home', product.ID])
  }
  getAllProduct() {
    console.log("ok")
    return this.services.getProduct().subscribe(data => { this.ProductList = data })
  }
  getCategory() {
    console.log("ok")
    return this.services.getProduct().subscribe(data => { this.ProductList = data  })
  }
  getCategory2()
  {
      return this.catServices.getCtegory().subscribe(data=>{this.categoryList=data});
  }
  ngOnInit(): void {
   this.getCategory2()
 this.getCategory();
    this.getAllProduct();
  }

}

