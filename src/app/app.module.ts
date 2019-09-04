import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalConfigurationService } from './shared/services/configuration.service';
import { AngularHalModule } from 'angular4-hal';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NoticeComponent } from './pages/notice/notice.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticeComponent
  ],
  imports: [
    BrowserModule,
    AngularHalModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [{
    provide: 'ExternalConfigurationService',
    useClass: ExternalConfigurationService
  },
  ExternalConfigurationService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
