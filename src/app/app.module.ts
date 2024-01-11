import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarDownComponent } from './navbar-down/navbar-down.component';
import {FooterComponent} from './footer/footer.component'
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PartitePageComponent } from './partite-page/partite-page.component';
import { ClassifichePageComponent } from './classifiche-page/classifiche-page.component';
import { PreferitiPageComponent } from './preferiti-page/preferiti-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { RisultatiPageComponent } from './risultati-page/risultati-page.component';
import { ProgrammatePageComponent } from './programmate-page/programmate-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OvestPageComponent } from './ovest-page/ovest-page.component';
import { EstPageComponent } from './est-page/est-page.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { RegistrazionePageComponent } from './registrazione-page/registrazione-page.component';
import { AccessoPageComponent } from './accesso-page/accesso-page.component';
//Providers
import { ApiService } from './_service/api.service';
import { DateTime } from 'luxon';
//Detail-pages
import { PartitaDetailPageComponent } from './partita-detail-page/partita-detail-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    NavbarDownComponent,
    FooterComponent,
    SearchBarComponent,
    PartitePageComponent,
    ClassifichePageComponent,
    PreferitiPageComponent,
    NewsPageComponent,
    RisultatiPageComponent,
    ProgrammatePageComponent,
    OvestPageComponent,
    EstPageComponent,
    ProfiloComponent,
    RegistrazionePageComponent,
    AccessoPageComponent,
    //detail
    PartitaDetailPageComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ],
  providers: [ApiService, { provide: DateTime, useValue: DateTime }],
  bootstrap: [AppComponent],
})
export class AppModule {}
