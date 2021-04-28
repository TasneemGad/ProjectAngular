import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { ICategory } from '../Shared_Interfaces/Category';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  categoryList : ICategory [] = []
  @Input('category') category :any;
  constructor(private services:CategoryService) { }
  getCategory()
  {
      return this.services.getCtegory().subscribe(data=>{this.categoryList=data});
  }
  ngOnInit(): void {
  this.getCategory()

  }

}
