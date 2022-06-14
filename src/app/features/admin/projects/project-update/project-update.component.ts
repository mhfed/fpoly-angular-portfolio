import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css'],
})
export class ProjectUpdateComponent implements OnInit {
  myForm = this.FormBuilder.group({
    id: null,
    name: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
    technical: ['', Validators.required],
    images: ['', Validators.required],
    description: ['', Validators.required],
    createAt: '',
  });

  validation_messages = {
    name: [
      { type: 'required', message: 'Đây là trường bắt buộc' },
      { type: 'minlength', message: 'Độ dài tối thiểu 5 ký tư' },
    ],
    images: [{ type: 'required', message: 'Đây là trường bắt buộc' }],
    description: [{ type: 'required', message: 'Đây là trường bắt buộc' }],
    technical: [{ type: 'required', message: 'Đây là trường bắt buộc' }],
  };

  constructor(
    private ProjectService: ProjectsService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private FormBuilder: FormBuilder,
    private notification: NzNotificationService,
    private ModalConfirm: NzModalService
  ) {}

  ngOnInit(): void {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.ProjectService.getProject(id).subscribe((data) => {
        
      this.myForm.patchValue(data);
    });
  }

  submitHandler() {
    this.ModalConfirm.confirm({
      nzTitle: 'Bạn có chắc muốn sửa ?',
      nzOkText: 'Xác nhận',
      nzCancelText: 'Hủy',
      nzOnOk: () => {
        this.ProjectService.updateProject(this.myForm.value).subscribe(() => {
          this.notification.success('Thông báo', 'Cập nhật dự án thành công');
          this.router.navigateByUrl('/admin/projects');
        });
      },
    });
  }
}
