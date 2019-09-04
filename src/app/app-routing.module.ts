import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeComponent } from './pages/notice/notice.component';

const routes: Routes = [
  { path: 'notice', component: NoticeComponent, data: { modulo: '' } },
  {
    path: '*',
    redirectTo: '/notice'
  },
  {
    path: '', redirectTo: '/notice', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
