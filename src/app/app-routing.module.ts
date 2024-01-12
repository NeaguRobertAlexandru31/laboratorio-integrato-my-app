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
//Detail-pages
import { PartitaDetailPageComponent } from './pages/partita-detail-page/partita-detail-page.component';

const routes: Routes = [
  { path: 'partite', component: PartitePageComponent },
  { path: 'partita/:idGame', component: PartitaDetailPageComponent},
  { path: 'classifiche', component: OvestPageComponent },
  { path: 'preferiti', component: PreferitiPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'partite/risultati', component: RisultatiPageComponent },
  { path: 'partite/programmate', component: ProgrammatePageComponent },
  { path: 'classifiche/ovest', component: OvestPageComponent },
  { path: 'classifiche/est', component: EstPageComponent },
  { path: 'profilo', component: ProfiloComponent },
  { path: 'registrazione', component: RegistrazionePageComponent },
  { path: 'accesso', component: AccessoPageComponent },
  { path: '**', component: RisultatiPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
