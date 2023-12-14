import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarDownComponent } from './navbar-down/navbar-down.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PartitePageComponent } from './partite-page/partite-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    NavbarDownComponent,
    SearchBarComponent,
    PartitePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
