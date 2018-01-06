import { Component, OnInit } from '@angular/core';
import {NetworkOperationsService} from '../network-operations.service';
import {Blog} from '../blog';
import {Category} from '../category';
import {Router} from '@angular/router';

@Component(
  {
  selector: 'app-select-categories',
  templateUrl: './select-categories.component.html',
  styleUrls: ['./select-categories.component.css']
  })

export class SelectCategoriesComponent implements OnInit
  {
  categories : Category[];
  public selectedCategories : Category[];

  constructor(private networkOperationsService : NetworkOperationsService,
              private router : Router) { }
  ngOnInit()
    {
    this.getCategories();
    this.selectedCategories = new Array();
    }
  getCategories() : void
    {
    this.networkOperationsService
      .getCategories()
      .subscribe(categories=>this.categories = categories);
    }
  onToggle(stagedCategory : Category) : void
      {
      if(this.selectedCategories.length==0)
          {
          this.selectedCategories.push(stagedCategory);
          this.networkOperationsService.updateSelectedCategories(this.selectedCategories);
          }
      else
          {
          if(this.selectedCategories.length>0)
            {
            for(var i=0; i<this.selectedCategories.length;i++)
                {
                if(stagedCategory.id==this.selectedCategories[i].id)
                    {
                    this.selectedCategories.splice(i,1);
                    this.networkOperationsService.updateSelectedCategories(this.selectedCategories);
                    break;
                    }
                else
                    {
                    if(i==this.selectedCategories.length-1)
                        {
                        this.selectedCategories.push(stagedCategory);
                        this.networkOperationsService.updateSelectedCategories(this.selectedCategories);
                        break;
                        }
                    }
                }
            }
          }
      }
}
