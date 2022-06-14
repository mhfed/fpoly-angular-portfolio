import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css'],
})
export class ProjectAddComponent implements OnInit {
  myForm = this.FormBuilder.group({
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
      { type: 'required', message: 'Field is required' },
      { type: 'minlength', message: 'Minlength is 5 characters' },
    ],
    images: [{ type: 'required', message: 'Field is required' }],
    description: [{ type: 'required', message: 'Field is required' }],
    technical: [{ type: 'required', message: 'Field is required' }],
  };

  constructor(
    private ProjectService: ProjectsService,
    private router: Router,
    private FormBuilder: FormBuilder,
    private notification: NzNotificationService,
    private ModalConfirm: NzModalService
  ) {}

  ngOnInit(): void {}
  submitHandler() {
    this.ModalConfirm.confirm({
      nzTitle: 'Bạn có chắc muốn thêm ?',
      nzOkText: 'Xác nhận',
      nzCancelText: 'Hủy',
      nzOnOk: () => {
        this.ProjectService.createProject({
          ...this.myForm.value,
          createAt: Date(),
        }).subscribe(() => {
          this.notification.success('Alert', 'Add project success');
          this.router.navigateByUrl('/admin/projects');
        });
      },
    });
  }
}
