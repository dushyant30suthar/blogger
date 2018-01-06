import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Category } from '../category';
import { NetworkOperationsService } from '../network-operations.service';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit
  {
  status : string ;
  constructor(
    private networkOperationsService : NetworkOperationsService,
    private location: Location) { }

  ngOnInit()
    {
    }

  addCateogry(title:string) : void
      {
      let category = new Category();
      category.title=title;
      this.networkOperationsService.addCateogry(category)
      .subscribe(status=>{
                this.status = status;
                this.onBackClickedListener()});
      }
  onBackClickedListener()
    {
    this.location.back();
    }
}
