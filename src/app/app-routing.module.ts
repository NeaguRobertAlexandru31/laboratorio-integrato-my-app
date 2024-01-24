import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Pages
import { PartitePageComponent } from './pages/partite-page/partite-page.component';
import { ClassifichePageComponent } from './pages/classifiche-page/classifiche-page.component';
import { PreferitiPageComponent } from './pages/preferiti-page/preferiti-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { RisultatiPageComponent } from './pages/risultati-page/risultati-page.component';
import { ProgrammatePageComponent } from './pages/programmate-page/programmate-page.component';
import { EstPageComponent } from './pages/est-page/est-page.component';
import { OvestPageComponent } from './pages/ovest-page/ovest-page.component';
//Login
import { ProfiloComponent } from './pages/profilo/profilo.component';
import { RegistrazionePageComponent } from './pages/registrazione-page/registrazione-page.component';
import { AccessoPageComponent } from './pages/accesso-page/accesso-page.component';
import { ProfiloDetailComponent } from './pages/profilo-detail/profilo-detail.component';
//Detail-pages
import { PartitaDetailPageComponent } from './pages/partita-detail-page/partita-detail-page.component';
import { SquadraPageComponent } from './pages/squadra-page/squadra-page.component';
/* Footer */
import { HoopsdataComponent } from './pages/hoopsdata/hoopsdata.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { PlayerPageComponent } from './pages/player-page/player-page.component';

const routes: Routes = [
  /* Partite svolte, programmate e statistiche */
  { path: 'partite', component: PartitePageComponent },
  { path: 'partite/risultati', component: RisultatiPageComponent },
  { path: 'partite/programmate', component: ProgrammatePageComponent },
  { path: 'partita/:idGame', component: PartitaDetailPageComponent},
  /* Classifiche ovest & est */
  { path: 'classifiche', component: OvestPageComponent },
  { path: 'classifiche/ovest', component: OvestPageComponent },
  { path: 'classifiche/est', component: EstPageComponent },
  /* Squadre e giocatori preferiti */
  { path: 'preferiti', component: PreferitiPageComponent },
  /* News e blog */
  { path: 'news', component: NewsPageComponent },
  /* Signup, Signin e Profilo Detail */
  { path: 'profilo', component: ProfiloComponent },
  { path: 'profilo/detail', component: ProfiloDetailComponent },
  { path: 'registrazione', component: RegistrazionePageComponent },
  { path: 'accesso', component: AccessoPageComponent },
  { path: 'squadra/:teamName', component: SquadraPageComponent },
  /* Footer */
  { path: 'hoopsdata', component: HoopsdataComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'player/:idPlayer/:season', component: PlayerPageComponent },
  { path: 'player', component: PlayerPageComponent },
  /* Reindirizzamento */
  { path: '**', component: RisultatiPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
