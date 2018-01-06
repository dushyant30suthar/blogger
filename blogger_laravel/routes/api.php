<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/blogs','ApiControllers\BlogsController@getBlogs');
Route::get('/blogs/{id}','ApiControllers\BlogsController@getBlog');
Route::post('/create_blog','ApiControllers\BlogsController@createBlog');
Route::post('/create_category','ApiControllers\CategoriesController@createCategory');
Route::get('/categories','ApiControllers\CategoriesController@showAll');
Route::get('/categories/{id}','ApiControllers\CategoriesController@findCategories');
Route::get('/get_blogs_by_category/{id}','ApiControllers\BlogsController@getBlogsByCategory');
