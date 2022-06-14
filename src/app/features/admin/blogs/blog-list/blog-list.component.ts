import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BlogsService } from 'src/app/services/blogs.service';
import { BlogElement } from 'src/app/shared/models/blogs.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  data!: BlogElement[];
  constructor(
    private ModalConfirm: NzModalService,
    private BlogService: BlogsService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.BlogService.getAllBlogs().subscribe((data) => {
      data.map((item) => {
        item.createAt = dayjs(item.createAt).format('DD-MM-YYYY');
      });
      this.data = data;
    });
  }

  handlerRemove(id: any) {
    this.ModalConfirm.confirm({
      nzTitle: 'Xác nhận xóa',
      nzOkText: 'Xác nhận',
      nzCancelText: 'Hủy',
      nzOnOk: () => {
        this.BlogService.removeBlog(id).subscribe((data) => {
          this.data = this.data.filter((item) => item.id != id);
          this.notification.success('Thông báo', 'Xóa dự án thành công');
        });
      },
    });
  }
}
