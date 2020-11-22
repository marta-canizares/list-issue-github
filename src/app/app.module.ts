// modulos 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';

// router
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { ListIssueComponent } from './components/list-issue/list-issue.component';

// Biblioteca ngrx 
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './data/reducer';
import { ListarIssueService } from './services/listar-issue.service';


@NgModule({
  declarations: [
    AppComponent,
    ListIssueComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    StoreModule.forRoot(AppReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ListarIssue: ListarIssueService) {
    ListarIssue.getIssues('user', 'repo');
  }
}

