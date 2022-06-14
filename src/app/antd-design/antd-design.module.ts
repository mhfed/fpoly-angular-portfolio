import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from '../icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


@NgModule({
  exports: [
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzTableModule,
    NzButtonModule,
    NzGridModule,
    NzSpaceModule,
    NzFormModule,
    NzModalModule,
    NzIconModule,
    NzNotificationModule
  ],
})
export class AntdDesignModule {}
