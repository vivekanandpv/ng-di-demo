import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';
import { RightComponent } from './right/right.component';
import {DemoService} from "./_services/demo.service";

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    CenterComponent,
    RightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: DemoService,
      useClass: DemoService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
