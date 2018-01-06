import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {NetworkOperationsService} from '../network-operations.service';
import {Blog} from '../blog';
import {Category} from '../category';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit
  {
  blogs : Blog[];
  constructor(private networkOperationsService : NetworkOperationsService,
              private router : Router,
              private route: ActivatedRoute)
              { }
  ngOnInit()
    {  
    const id = +this.route.snapshot.paramMap.get('category_id');
    if(id!=0)
      {
      console.log(id) ;
      this.getBlogsByCategory(id);
      }
    else
      {
      this.getBlogs();
      }
    }
  getBlogsByCategory(id : number) : void
      {
      this.networkOperationsService.getBlogsByCategory(id)
      .subscribe(blogs=>this.blogs = blogs);
      }
  getBlogs() : void
      {
      this.networkOperationsService.getBlogs()
      .subscribe(blogs=>this.blogs = blogs);
      }
  onItemClickListener(id : number) : void
      {
      this.router.navigate(['view', {outlets: {'blog-section':'view_blog/'+id}}]);
      }
  onAddBlogClicked() : void
      {
      this.router.navigate(['edit_blog', {outlets: {'blog-section':'add_blog','category-section':'categories_list'}}]);
      }
  }
