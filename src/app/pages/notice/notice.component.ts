import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import { NoticeService } from 'src/app/shared/services/notice.service';
import { Notice } from 'src/app/shared/models/notice.model';
import { GridOptions } from 'ag-grid-community';
import { TemplateRendererComponent } from 'src/app/shared/components/template-renderer/template-renderer.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Action } from '../../shared/enuns/action.enum';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit, AfterViewInit {

  constructor(private noticeService: NoticeService,
    private modalService: BsModalService,
    private toastService: ToastrService){
  }

  modalRef: BsModalRef;
  notices: Notice[];
  gridOptions: GridOptions = {
    rowData: [],
    localeText: { noRowsToShow: 'Não existem registros que atendam aos critérios da pesquisa!' }
  };

  optionsMenu: any = [];

  @ViewChild('buttonView')
  buttonView: TemplateRef<any>;

  @ViewChild('modalNotice')
  modalNotice: TemplateRef<any>;
  
  ngOnInit() {
    this.listNotices();
  }

  ngAfterViewInit() {

    this.gridOptions.getRowStyle = function(params) {

      if (params.data.visualization !== null) {
          return { background: '#3CB371' }
      }
    }

    this.gridOptions.api.setColumnDefs([
      {
        headerName: 'Título',
        field: 'title'
      },
      {
        headerName: 'Ações',
        field: 'acoes',
        cellRendererFramework: TemplateRendererComponent,
        cellRendererParams: {
          ngTemplate: this.buttonView
        }
      },
    ]);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get actionSave(){
    return Action.SAVE
  }

  listNotices(){
    this.noticeService.getAll().subscribe(notices => this.notices = notices);
  }

  updateGrid(event){
    this.listNotices();
  }

  deleteNotice(notice: Notice){
    this.noticeService.delete(notice).subscribe(()=>{
      this.toastService.success('A operação foi realizada com sucesso');
      this.listNotices();
    });
  }

}
