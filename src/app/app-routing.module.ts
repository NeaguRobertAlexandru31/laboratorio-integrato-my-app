import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartitePageComponent } from './partite-page/partite-page.component';
import { ClassifichePageComponent } from './classifiche-page/classifiche-page.component';
import { PreferitiPageComponent } from './preferiti-page/preferiti-page.component';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
  { path: 'partite', component: PartitePageComponent },
  { path: 'classifiche', component: ClassifichePageComponent },
  { path: 'preferiti', component: PreferitiPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: '**', component: PartitePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
