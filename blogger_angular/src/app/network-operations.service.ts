import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Blog} from './blog';
import {Category} from './category';
import {ApiConfigurations} from './api-configurations';
import {AddBlogRequest} from './add-blog-request';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NetworkOperationsService
  {
  apiConfigurations : ApiConfigurations = new ApiConfigurations();
  selectedCategories : Category[];

  constructor(private http: HttpClient) { }

  getBlogs() : Observable<Blog[]>
    {
    return this.http.get<Blog[]>(this.apiConfigurations.getBlogsUrl());
    }
  getBlogsByCategory(id : number) : Observable<Blog[]>
    {
    return this.http.get<Blog[]>(this.apiConfigurations.getBlogsByCategoryUrl()+'/'+id);
    }  
  getCategories() : Observable<Category[]>
    {
    return this.http.get<Category[]>(this.apiConfigurations.getCategoriesUrl());
    }
  getBlog(id:number) : Observable<Blog>
    {
    return this.http.get<Blog>(this.apiConfigurations.getBlogsUrl()+'/'+id);
    }
  addCateogry(category : Category) : Observable<string>
    {
    console.log(category);
    return this.http.post<string>(this.apiConfigurations.getAddCategoriesUrl(),category,httpOptions);
    }
  addBlog(blog : Blog) : Observable <string>
    {
    console.log(blog);
    return this.http.post<string>(this.apiConfigurations.getAddBlogsUrl(),blog,httpOptions);
    }
  updateSelectedCategories(selectedCategories : Category[])
    {
    this.selectedCategories=selectedCategories;
    }
  }
