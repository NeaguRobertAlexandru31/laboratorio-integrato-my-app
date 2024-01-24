import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { NavbarDownComponent } from './components/navbar-down/navbar-down.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

//PAGES:
//Partite
import { PartitePageComponent } from './pages/partite-page/partite-page.component';
import { ProgrammatePageComponent } from './pages/programmate-page/programmate-page.component';
import { RisultatiPageComponent } from './pages/risultati-page/risultati-page.component';
//Classifiche
import { ClassifichePageComponent } from './pages/classifiche-page/classifiche-page.component';
import { EstPageComponent } from './pages/est-page/est-page.component';
import { OvestPageComponent } from './pages/ovest-page/ovest-page.component';
//Preferiti
import { PreferitiPageComponent } from './pages/preferiti-page/preferiti-page.component';
//Blog
import { NewsPageComponent } from './pages/news-page/news-page.component';
//Profilo
import { ProfiloComponent } from './pages/profilo/profilo.component';
import { RegistrazionePageComponent } from './pages/registrazione-page/registrazione-page.component';
import { AccessoPageComponent } from './pages/accesso-page/accesso-page.component';
//Providers
import { ApiService } from './_service/api.service';
import { DateTime } from 'luxon';
//Detail-pages
import { PartitaDetailPageComponent } from './pages/partita-detail-page/partita-detail-page.component';
import { ProfiloDetailComponent } from './pages/profilo-detail/profilo-detail.component';
//Calendar
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CalendarComponent } from './components/calendar/calendar.component';
//Squadra
import { SquadraPageComponent } from './pages/squadra-page/squadra-page.component';
import { FilterPipe } from './_hooks/filter.pipe';
import { FilterPipePlayers } from './_hooks/filterPlayers.pipe';
import { CommonModule } from '@angular/common';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { FavoriteApiService } from './_service/favoriteApi.service';
import { LogoutComponent } from './components/logout/logout.component';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';
import { HoopsdataComponent } from './pages/hoopsdata/hoopsdata.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

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
    SquadraPageComponent,
    PlayerPageComponent,
    //detail
    PartitaDetailPageComponent,
    CalendarComponent,
    FilterPipe,
    FilterPipePlayers,
    ProfiloDetailComponent,
    LogoutComponent,
    DeleteAccountComponent,
    HoopsdataComponent,
    FeedbackComponent,
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
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [ApiService, { provide: DateTime, useValue: DateTime }, FavoriteApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
