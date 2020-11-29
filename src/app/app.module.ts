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
import { ListarIssueService } from './services/listar-issue.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { IssueEffects } from './store/effects/issues.effects';

import { AppReducers } from './store/reducers/reducer';
import { environment } from '../environments/environment';


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
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot([IssueEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ListarIssue: ListarIssueService) {
    ListarIssue.getIssues('user', 'repo');
  }
}

