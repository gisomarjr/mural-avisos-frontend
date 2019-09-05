import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { TemplateRendererComponent } from './components/template-renderer/template-renderer.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [GridComponent, TemplateRendererComponent, NavBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule.withComponents([TemplateRendererComponent]),
    ModalModule.forRoot(),
    ToastrModule.forRoot()
  ],
  exports: [
    GridComponent,
    NavBarComponent,
    FormsModule
  ]
})
export class SharedModule { }
