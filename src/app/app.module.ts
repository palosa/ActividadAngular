import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MiEvento } from './MiEvento';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MiEvento
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
