import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Blog } from '../blog';
import { Category } from '../category';
import {NetworkOperationsService} from '../network-operations.service';
import {AddBlogRequest} from '../add-blog-request';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit
  {
  blog_title = 'Android Development';
  status : string;
  constructor(private location : Location,
              private networkOperationsService : NetworkOperationsService) { }

  ngOnInit()
  {}

  onBackClickedListener()
    {
    this.location.back();
    }

  addBlog(title:string,body:string) : void
      {
      let blog = new Blog();
      blog.title=title;
      blog.body=body;
      blog.categories=new Array();
      for(let category of this.networkOperationsService.selectedCategories)
        {
        blog.categories.push(category.id);
        }
      this.networkOperationsService.addBlog(blog).subscribe(status=>{
                this.status = status;
                this.onBackClickedListener()});
      }
  }
