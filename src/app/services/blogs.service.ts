import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogElement } from '../shared/models/blogs.model';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  API_URL = 'http://localhost:3001/blogs';
  constructor(private http: HttpClient) {}
  getAllBlogs(): Observable<BlogElement[]> {
    return this.http.get<BlogElement[]>(this.API_URL);
  }
  createBlog(data: BlogElement): Observable<BlogElement> {
    return this.http.post<BlogElement>(this.API_URL, data);
  }
  removeBlog(id: any): Observable<BlogElement> {
    return this.http.delete<BlogElement>(this.API_URL + `/${id}`);
  }
  getBlogs(id: any): Observable<BlogElement> {
    return this.http.get<BlogElement>(this.API_URL + `/${id}`);
  }
  updateBlogs(data: BlogElement): Observable<BlogElement[]> {
    return this.http.put<BlogElement[]>(this.API_URL + `/${data.id}`, data);
  }
}
