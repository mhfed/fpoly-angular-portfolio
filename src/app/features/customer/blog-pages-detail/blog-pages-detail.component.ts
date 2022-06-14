import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs';
import { BlogsService } from 'src/app/services/blogs.service';
import { BlogElement } from 'src/app/shared/models/blogs.model';

@Component({
  selector: 'app-blog-pages-detail',
  templateUrl: './blog-pages-detail.component.html',
  styleUrls: ['./blog-pages-detail.component.css'],
})
export class BlogPagesDetailComponent implements OnInit {
  data!: BlogElement;
  constructor(
    private BlogsService: BlogsService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.BlogsService.getBlogs(id).subscribe((data) => {
      data.createAt = dayjs(data.createAt).format('YYYY');
      this.data = data;
    });
  }
}
