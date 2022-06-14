import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css'],
})
export class BlogAddComponent implements OnInit {
  public Editor = ClassicEditorBuild;
  myForm = this.FormBuilder.group({
    title: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
    subTitle: ['', Validators.required],
    content: ['', Validators.required],
    category: ['', Validators.required],
    createAt: '',
  });

  validation_messages = {
    title: [
      { type: 'required', message: 'This field is required' },
      { type: 'minlength', message: 'Minlength is 5 characters' },
    ],
    subTitle: [{ type: 'required', message: 'This field is required' }],
    category: [{ type: 'required', message: 'This field is required' }],
    content: [{ type: 'required', message: 'This field is required' }],
  };
  constructor(
    private FormBuilder: FormBuilder,
    private BlogService: BlogsService,
    private ModalConfirm: NzModalService,
    private notification: NzNotificationService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  submitHandler() {
    this.ModalConfirm.confirm({
      nzTitle: 'Bạn có chắc muốn thêm ?',
      nzOkText: 'Xác nhận',
      nzCancelText: 'Hủy',
      nzOnOk: () => {
        this.BlogService.createBlog({
          ...this.myForm.value,
          createAt: Date(),
        }).subscribe(() => {
          this.notification.success('Thông báo', 'Thêm blog thành công');
          this.router.navigateByUrl('/admin/blogs');
        });
      },
    });
  }
}
