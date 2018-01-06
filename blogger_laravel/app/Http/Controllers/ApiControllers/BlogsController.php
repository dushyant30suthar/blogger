<?php

namespace App\Http\Controllers\ApiControllers;
use App\Http\Controllers\Controller;
use Request;

use App\Blog;
use App\Category;

class BlogsController extends Controller
  {
  public function getBlogs()
    {
    $blogs=Blog::all();
    return $blogs;
    }
  public function getBlog($id)
    {
    $blog=Blog::find($id);
    return $blog;
    }
  public function createBlog()
    {
     $input = Request::all();
     $blog = new Blog;
     $createdBlog = $blog->create(['title'=>$input['title'],'body'=>$input['body']]);

     $categoryIds = $input['categories'];
     for ($i=0; $i < sizeof($categoryIds) ; $i++)
        {
        $category = Category::where('id','=',$categoryIds[$i])->firstOrFail();
        $category->blogs()->attach($createdBlog['id']);    
        }


     // $category = Category::where('id','=',$input['category_id'])->firstOrFail();
     // $category->blogs()->attach($createdBlog['id']);
     return 'true';
    }
  public function getBlogsByCategory($categoryId)
      {
      $category = Category::find($categoryId);
      return $category->blogs;
      }
  }
