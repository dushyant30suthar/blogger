import { Component, OnInit } from '@angular/core';
import {NetworkOperationsService} from '../network-operations.service';
import {Blog} from '../blog';
import {Category} from '../category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit
  {
  categories : Category[];
  constructor(private networkOperationsService : NetworkOperationsService,
              private router : Router) { }

  ngOnInit()
    {
    this.getCategories();
    }
  getCategories() : void
    {
    this.networkOperationsService.getCategories()
      .subscribe(categories=>this.categories = categories);
    }
  onAddCategoryClicked() : void
      {
      this.router.navigate(['edit_category', {outlets: {'category-section':'add_category'}}]);
      }
  onCategoryItemClicked(categoryId : number)
      {
      this.router.navigate(['blogs_by_category', {outlets: {'blog-section':'blogs/'+categoryId,'category-section':'categories'}}]);
      }
}
