import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComposeComponent } from './layout/sidenav/compose/compose.component';
import { DraftsComponent } from './layout/sidenav/drafts/drafts.component';
import { ImportantComponent } from './layout/sidenav/important/important.component';
import { InboxComponent } from './layout/sidenav/inbox/inbox.component';
import { SentComponent } from './layout/sidenav/sent/sent.component';
import { StarredComponent } from './layout/sidenav/starred/starred.component';
import { TrashComponent } from './layout/sidenav/trash/trash.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'sidenav',
    children: [
      { path: 'drafts', component: DraftsComponent },
      { path: 'important', component: ImportantComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'sent', component: SentComponent },
      { path: 'starred', component: StarredComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'compose', component: ComposeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
