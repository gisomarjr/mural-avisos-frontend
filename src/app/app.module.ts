import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalConfigurationService } from './shared/services/configuration.service';
import { AngularHalModule } from 'angular4-hal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularHalModule.forRoot(),
    AppRoutingModule
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
