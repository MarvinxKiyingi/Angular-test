import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AComponent } from './component/a/a.component';
import { BComponent } from './component/b/b.component';

@NgModule({
  declarations: [AppComponent, AComponent, BComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
