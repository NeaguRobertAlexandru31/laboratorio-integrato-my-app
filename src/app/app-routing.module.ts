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

const routes: Routes = [
  { path: 'partite', component: PartitePageComponent },
  { path: 'classifiche', component: ClassifichePageComponent },
  { path: 'preferiti', component: PreferitiPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'partite/risultati', component: RisultatiPageComponent },
  { path: 'partite/programmate', component: ProgrammatePageComponent },
  { path: 'classifiche/ovest', component: OvestPageComponent },
  { path: 'classifiche/est', component: EstPageComponent },
  { path: '**', component: RisultatiPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
