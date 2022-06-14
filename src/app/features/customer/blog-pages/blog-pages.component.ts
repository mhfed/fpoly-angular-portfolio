import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { BlogsService } from 'src/app/services/blogs.service';
import { BlogElement } from 'src/app/shared/models/blogs.model';

@Component({
  selector: 'app-blog-pages',
  templateUrl: './blog-pages.component.html',
  styleUrls: ['./blog-pages.component.css'],
})
export class BlogPagesComponent implements OnInit {
  data!: BlogElement[];
  constructor(private BlogService: BlogsService) {}

  ngOnInit(): void {
    this.BlogService.getAllBlogs().subscribe((data) => {
      data.map(
        (item) => (item.createAt = dayjs(item.createAt).format('DD-MM-YYYY'))
      );
      this.data = data;
    });
  }
}
