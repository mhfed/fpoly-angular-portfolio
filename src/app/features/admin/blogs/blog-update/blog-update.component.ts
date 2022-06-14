import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent implements OnInit {
  public Editor = ClassicEditorBuild;
  myForm = this.FormBuilder.group({
    id: null,
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
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id')
    this.BlogService.getBlogs(id).subscribe((data) => {
        this.myForm.setValue(data)
    })
  }
  

  submitHandler() {
    this.ModalConfirm.confirm({
      nzTitle: 'Bạn có chắc muốn thêm ?',
      nzOkText: 'Xác nhận',
      nzCancelText: 'Hủy',
      nzOnOk: () => {
        this.BlogService.updateBlogs(this.myForm.value).subscribe(() => {
          this.notification.success('Thông báo', 'Cập nhật blog thành công');
          this.router.navigateByUrl('/admin/blogs');
        });
      },
    });
  }
 
}
