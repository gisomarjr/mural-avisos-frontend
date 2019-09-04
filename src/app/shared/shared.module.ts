import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { TemplateRendererComponent } from './components/template-renderer/template-renderer.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [GridComponent, TemplateRendererComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule.withComponents([TemplateRendererComponent]),
    ModalModule.forRoot()
  ],
  exports: [
    GridComponent,
    FormsModule
  ]
})
export class SharedModule { }
