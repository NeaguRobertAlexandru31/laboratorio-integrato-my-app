import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarDownComponent } from './navbar-down/navbar-down.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PartitePageComponent } from './partite-page/partite-page.component';
import { ClassifichePageComponent } from './classifiche-page/classifiche-page.component';
import { PreferitiPageComponent } from './preferiti-page/preferiti-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { RisultatiPageComponent } from './risultati-page/risultati-page.component';
import { ProgrammatePageComponent } from './programmate-page/programmate-page.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    NavbarDownComponent,
    SearchBarComponent,
    PartitePageComponent,
    ClassifichePageComponent,
    PreferitiPageComponent,
    NewsPageComponent,
    RisultatiPageComponent,
    ProgrammatePageComponent,
    CalendarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlatpickrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
