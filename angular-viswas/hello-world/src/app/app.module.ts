import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestserviceService } from './testservice.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TestserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
