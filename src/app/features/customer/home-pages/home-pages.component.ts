import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { ProjectsService } from 'src/app/services/projects.service';
import { ProjectElement } from 'src/app/shared/models/projects.model';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent implements OnInit {
  data!: ProjectElement[]
  constructor(private ProjectsService: ProjectsService) { }

  ngOnInit(): void {
    this.ProjectsService.getAllProject().subscribe((data) => {
      data.map((item) => {
        item.createAt = dayjs(item.createAt).format("YYYY")
      })
      this.data = data
    })
  }

}
