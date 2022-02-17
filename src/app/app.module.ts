import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';
import { RightComponent } from './right/right.component';
import {DemoService} from "./_services/demo.service";
import {SampleModule} from "./sample/sample.module";
import { FlashComponent } from './flash/flash.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    CenterComponent,
    RightComponent,
    FlashComponent
  ],
  imports: [
    BrowserModule,
    SampleModule
  ],
  providers: [
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
