import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Blog} from '../blog';
import {NetworkOperationsService }  from '../network-operations.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit
  {
  blog :Blog;
  constructor(
    private route: ActivatedRoute,
    private networkOperationsService: NetworkOperationsService,
    private location: Location) { }
  ngOnInit()
    {
    this.showBlog();
    }
  showBlog() :void
      {

      const id = +this.route.snapshot.paramMap.get('id');
      this.networkOperationsService.getBlog(id)
      .subscribe(blog=>this.blog=blog);
      }
  onBackClickedListener()
    {
    this.location.back();
    }
}
