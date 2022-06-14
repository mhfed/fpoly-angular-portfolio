import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { ProjectsService } from 'src/app/services/projects.service';
import { ProjectElement } from 'src/app/shared/models/projects.model';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css'],
})
export class MyProjectComponent implements OnInit {
  data!: ProjectElement[];
  constructor(private ProjectsService: ProjectsService) {}

  ngOnInit(): void {
    this.ProjectsService.getAllProject().subscribe((data) => {
      data.map((item) => {
        item.createAt = dayjs(item.createAt).format('YYYY');
      });
      this.data = data;
    });
  }
}
