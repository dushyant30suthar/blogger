export class ApiConfigurations
  {
  hostaddress : string = 'http://localhost:8000';
  route :string = '/api';
  getBlogsUrl() : string
      {
      return this.hostaddress+this.route+"/blogs";
      }
  getBlogsByCategoryUrl() : string
      {
      return this.hostaddress+this.route+"/get_blogs_by_category";
      }
  getCategoriesUrl() : string
      {
      return this.hostaddress+this.route+"/categories";
      }
  getAddCategoriesUrl() : string
      {
      return this.hostaddress+this.route+"/create_category";
      }
  getAddBlogsUrl() : string
      {
      return this.hostaddress+this.route+"/create_blog";
      }
  }
