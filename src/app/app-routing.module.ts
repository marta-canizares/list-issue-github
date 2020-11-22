import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListIssueComponent } from './components/list-issue/list-issue.component';


const routes: Routes = [
  { path: 'list-issues', component: ListIssueComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'list-issues' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
