import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListarIssueService {

  constructor(private httpClient: HttpClient) {

  }

  getIssues(user, repo): Observable<any> {
    return this.httpClient.get(`https://api.github.com/repos/${user}/${repo}/issues`);
  }

}
