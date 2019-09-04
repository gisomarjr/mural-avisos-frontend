import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoticeComponent } from './notice.component';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal/public_api';

@NgModule({
  declarations: [NoticeComponent, ModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class NoticeModule { }
