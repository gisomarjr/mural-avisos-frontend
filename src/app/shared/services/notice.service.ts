import { RestService } from 'angular4-hal';
import { Notice } from '../models/notice.model';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticeService extends RestService<Notice> {

  constructor(injector: Injector) {
    super(Notice, 'notices', injector);
  }

  /*const options: any = {
    params: [
        { key: 'title', value: title },
    ]
  };*/

}