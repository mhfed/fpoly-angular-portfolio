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
      { type: 'required', message: 'Đây là trường bắt buộc' },
      { type: 'minlength', message: 'Độ dài tối thiểu 5 ký tư' },
    ],
    subTitle: [{ type: 'required', message: 'Đây là trường bắt buộc' }],
    category: [{ type: 'required', message: 'Đây là trường bắt buộc' }],
    content: [{ type: 'required', message: 'Đây là trường bắt buộc' }],
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
        this.BlogService.createBlog({...this.myForm.value, createAt: Date()}).subscribe(() => {
          this.notification.success('Thông báo', 'Thêm blog thành công');
          this.router.navigateByUrl('/admin/blogs');
        });
      },
    });
  }
 
}
