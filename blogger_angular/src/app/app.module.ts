import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import {NetworkOperationsService} from './network-operations.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule,MatToolbarModule,MatListModule,MatInputModule,MatButtonModule,MatDialogModule,MatPaginatorModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { SelectCategoriesComponent } from './select-categories/select-categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { BloggingComponent } from './blogging/blogging.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    CategoryListComponent,
    EditBlogComponent,
    ViewBlogComponent,
    SelectCategoriesComponent,
    EditCategoryComponent,
    BloggingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [NetworkOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
