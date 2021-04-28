import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { IProduct } from '../Shared_Interfaces/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  deptId: any
  select: IProduct
  listid = new IProduct
  constructor(private active: ActivatedRoute, private services: ProductService) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe((params: ParamMap) => {
      this.deptId = Number(params.get('id'))
    this.getitemsById(this.deptId)

      console.log(this.deptId)

    })
  }
  getitemsById(id: any) {
    this.services.getItemId(id).subscribe(data => {
      this.listid = data
      console.log(data)

    })
  }

}









