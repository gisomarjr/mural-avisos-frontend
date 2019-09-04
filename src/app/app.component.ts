import { Component, OnInit } from '@angular/core';
import { NoticeService } from './shared/services/notice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mural-avisos';

  constructor(private noticeService: NoticeService){

  }

  ngOnInit() {
    this.noticeService.getAll().subscribe(dado => console.log(dado));
   }
}
