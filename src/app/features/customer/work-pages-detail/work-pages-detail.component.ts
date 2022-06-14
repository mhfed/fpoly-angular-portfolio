import { ProjectElement } from './../../../shared/models/projects.model';
import { ProjectsService } from './../../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-work-pages-detail',
  templateUrl: './work-pages-detail.component.html',
  styleUrls: ['./work-pages-detail.component.css'],
})
export class WorkPagesDetailComponent implements OnInit {
  project!: ProjectElement;
  constructor(
    private router: ActivatedRoute,
    private ProjectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.ProjectsService.getProject(id).subscribe((data) => {
      this.project = data;
    });
  }
}
