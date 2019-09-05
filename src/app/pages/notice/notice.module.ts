import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoticeComponent } from './notice.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [NoticeComponent, ModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NoticeComponent, ModalComponent],
})
export class NoticeModule { }
