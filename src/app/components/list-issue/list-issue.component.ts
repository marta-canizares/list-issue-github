import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListarIssueService } from '../../services/listar-issue.service';
import { AppState } from '../../store/reducers/reducer';
import { ProvideIssues } from '../../store/actions/actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-list-issue',
  templateUrl: './list-issue.component.html',
  styleUrls: ['./list-issue.component.css']
})


export class ListIssueComponent implements OnInit {

  public arrIssues: any;
  public urlIssue: any;
  public issueHTML: string;
  public page: number;
  public isValid: boolean;
  public content: boolean;


  constructor(
    private issueService: ListarIssueService,
    private store: Store<AppState>) {
    
    this.arrIssues = [];
    this.issueHTML = '';

    this.urlIssue = {
      user: '',
      repo: ''
    };
    this.isValid = true;
    this.content = true;


  }

  ngOnInit(): void {

  }


  getAllIssues() {
  this.issueService.getIssues((this.urlIssue.user.toLowerCase()), (this.urlIssue.repo.toLowerCase()))
      .subscribe(data => {
        if (data.length === 0) {
          this.arrIssues = data;
          this.content = false;
        } else {
          this.arrIssues = data;
          this.isValid = true;
          this.content = true;
        }
      }, (err: HttpErrorResponse) => {

        if (err.error instanceof Error) {
          alert('client-side error');
          console.log('Client-side error');
        } else {
          this.isValid = false;
          alert('Usuario o repositorio no válido');
          console.log('Usuario o repositorio no válido');
          setTimeout(this.recarga, 1000);
        }

      });
  }

  private recarga(): any {
    location.reload();
  }


  getStoreIssues() {
    this.store.select('listIssue').subscribe(issues => {
      this.arrIssues = issues;
    });
    this.store.dispatch(ProvideIssues({ issue: this.arrIssues }));
  }

}


