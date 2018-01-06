import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditBlogComponent} from './edit-blog/edit-blog.component';
import {EditCategoryComponent} from './edit-category/edit-category.component';
import {ViewBlogComponent} from './view-blog/view-blog.component';
import {BlogListComponent} from './blog-list/blog-list.component';
import {SelectCategoriesComponent} from './select-categories/select-categories.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {AppComponent} from './app.component';
import {BloggingComponent} from './blogging/blogging.component';


const routes: Routes =
  [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'blogging',
      component: BloggingComponent,
      children:
        [
          {
            path: 'blogs',
            component: BlogListComponent,
            outlet:'blog-section'
          },
          {
            path: 'categories',
            component: CategoryListComponent,
            outlet:'category-section'
          }
        ]
    },
    {
      path: 'view',
      component: BloggingComponent,
      children:
        [
          {
            path: 'view_blog/:id',
            component: ViewBlogComponent,
            outlet:'blog-section'
          }
        ]
    },
    {
      path: 'edit_category',
      component: BloggingComponent,
      children:
        [
          {
            path: 'add_category',
            component: EditCategoryComponent,
            outlet:'category-section'
          }
        ]
    },
    {
      path: 'edit_blog',
      component: BloggingComponent,
      children:
        [
          {
            path: 'add_blog',
            component: EditBlogComponent,
            outlet:'blog-section'
          },
          {
            path: 'categories_list',
            component: SelectCategoriesComponent,
            outlet:'category-section'
          }
        ]
    },
    {
      path: 'blogs_by_category',
      component: BloggingComponent,
      children:
        [
          {
            path: 'blogs/:category_id',
            component: BlogListComponent,
            outlet:'blog-section'
          },
          {
            path: 'categories',
            component: CategoryListComponent,
            outlet:'category-section'
          }
        ]
    }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
export class AppRoutingModule { }
