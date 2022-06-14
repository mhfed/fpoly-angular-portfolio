import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectElement } from '../shared/models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  API_URL = "http://localhost:3001/projects"
  constructor(private http: HttpClient) { }
  getAllProject(): Observable<ProjectElement[]> {
    return this.http.get<ProjectElement[]>(this.API_URL)
  }
  createProject(data: ProjectElement): Observable<ProjectElement> {
    return this.http.post<ProjectElement>(this.API_URL, data)
  }
  updateProject(data: ProjectElement): Observable<ProjectElement> {
    return this.http.put<ProjectElement>(this.API_URL + `/${data.id}`, data)
  }
  removeProject(id: any): Observable<ProjectElement> {
    return this.http.delete<ProjectElement>(this.API_URL + `/${id}`)
  }
  getProject(id: any): Observable<ProjectElement> {
    return this.http.get<ProjectElement>(this.API_URL + `/${id}`)
  }

}
