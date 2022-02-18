import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';
import { RightComponent } from './right/right.component';
import {DemoService} from "./_services/demo.service";

export const DEMO_SERVICE = new InjectionToken<DemoService>('DEMO_SERVICE');

const demoServiceInstance = new DemoService();
demoServiceInstance.randomNumber = 100.256;

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
      provide: DEMO_SERVICE,
      useValue: demoServiceInstance
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
