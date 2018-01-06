<?php

namespace App\Http\Controllers\ApiControllers;
use App\Http\Controllers\Controller;
use Request;
use App\Category;

class CategoriesController extends Controller
  {
  public function showAll()
      {
      $categories=Category::all();
      return $categories;
      }
  public function findCategory($id)
      {
      $category=Category::find($id);
      return $category;
      }
  public function createCategory()
      {
      $input = Request::all();
      $category = new Category;
      $createdCategory = $category->create(['title'=>$input['title']]);
      return 'true';
      }
  }
