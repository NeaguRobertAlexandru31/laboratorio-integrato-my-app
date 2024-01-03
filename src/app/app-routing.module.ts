import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartitePageComponent } from './partite-page/partite-page.component';
import { ClassifichePageComponent } from './classifiche-page/classifiche-page.component';
import { PreferitiPageComponent } from './preferiti-page/preferiti-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { RisultatiPageComponent } from './risultati-page/risultati-page.component';
import { ProgrammatePageComponent } from './programmate-page/programmate-page.component';
import { EstPageComponent } from './est-page/est-page.component';
import { OvestPageComponent } from './ovest-page/ovest-page.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { RegistrazionePageComponent } from './registrazione-page/registrazione-page.component';
import { AccessoPageComponent } from './accesso-page/accesso-page.component';

const routes: Routes = [
  { path: 'partite', component: PartitePageComponent },
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
