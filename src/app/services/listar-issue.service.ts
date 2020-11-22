import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from '../data/reducer';
import { ProvideIssues } from '../data/actions';



@Injectable({
  providedIn: 'root'
})
export class ListarIssueService {

  private arrIssues: any;

  constructor(private httpClient: HttpClient, private store: Store<AppState>) {
    this.arrIssues = [];

  }

  issue$: Observable<any[]> = this.store.select((s) => s.list).pipe(map((b) => b.issues));



  getIssues(user, repo): Observable<any> {
    this.arrIssues = this.httpClient.get(`https://api.github.com/repos/${user}/${repo}/issues`);

    this.store.dispatch(ProvideIssues({ issue: this.arrIssues }));

    return this.arrIssues;
  }

}
