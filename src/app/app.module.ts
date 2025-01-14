import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GifsModule,
    SharedModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
