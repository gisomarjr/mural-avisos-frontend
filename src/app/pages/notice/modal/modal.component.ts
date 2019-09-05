import { Component, OnInit, Input, TemplateRef, ViewChild, Output,EventEmitter, ChangeDetectorRef  } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { Notice } from '../../../shared/models/notice.model';
import { Action } from '../../../shared/enuns/action.enum';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup } from '@angular/forms';
import { NoticeService } from '../../../shared/services/notice.service';
import * as moment from 'moment';
import { combineLatest, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: BsModalService,
    private noticeService: NoticeService,
    private changeDetection: ChangeDetectorRef,
    private toastService: ToastrService) { }

  modalRef: BsModalRef;

  @Input()
  typeButton:string = "btn btn-primary";

  @Input()
  titleButton: string ='Enter';

  @Input()
  notice: Notice = new Notice();

  @Input()
  action: Action = Action.CONSULT;

  @Output()
  eventModel = new EventEmitter();

  @ViewChild('modal')
  modal: TemplateRef<any>;

  formNotice: FormGroup;

  subscriptions: Subscription[] = [];

  ngOnInit() {
  }

  openModal() {
    if(this.action == Action.CONSULT && this.notice.id && this.notice.visualization == null){
      this.notice.visualization = moment().format('DD/MM/YYYY');
      this.noticeService.update(this.notice).subscribe( (newNotice: Notice) => {
        this.toastService.success('Marcado como visualizado'); 
        this.notice = newNotice;
      })
    }

    const _combine = combineLatest(
      this.modalService.onShow,
      this.modalService.onShown,
      this.modalService.onHide,
      this.modalService.onHidden
    ).subscribe(() => this.changeDetection.markForCheck());

    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string) => {
        this.eventModel.emit({"reason": reason});
        this.notice = new Notice();
      })
    );
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string) => {
        this.eventModel.emit({"reason": reason});
        this.notice = new Notice();
      })
    );

    this.subscriptions.push(_combine);

    this.modalRef = this.modalService.show(this.modal);
  }

  unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }

  closeModal(){
    this.modalRef.hide();
  }

  get consultEnum(){
    return Action.CONSULT;
  }

  saveOrClose(){
    if(this.action == Action.SAVE){
      this.noticeService.create(this.notice).subscribe( (newNotice: Notice) => {
        this.notice = newNotice;
        this.closeModal();
        this.toastService.success('A operação foi realizada com sucesso');
      });
    }else {
      this.closeModal();
    }
  }
}

