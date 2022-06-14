import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProjectsService } from 'src/app/services/projects.service';
import { ProjectElement } from 'src/app/shared/models/projects.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  data: ProjectElement[] = [];
  constructor(
    private ProjectsService: ProjectsService,
    private ModalConfirm: NzModalService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.ProjectsService.getAllProject().subscribe((data) => {
      // console.log([...{crea}])}
      data.map((item) => {
        item.createAt = dayjs(item.createAt).format('DD/MM/YYYY');
      });
      this.data = data;
      console.log(data);
    });
  }
  handlerRemove(id: any) {
    this.ModalConfirm.confirm({
      nzTitle: "Xác nhận xóa",
      nzOkText: "Xác nhận",
      nzCancelText: "Hủy",
      nzOnOk: () => {
        this.ProjectsService.removeProject(id).subscribe((data) => {
          this.data = this.data.filter((item) => item.id != id);
          this.notification.success("Thông báo", "Xóa dự án thành công")
        });
      }
    })
  }
}
