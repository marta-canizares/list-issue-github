import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProvideIssues } from '../actions/actions';
import { tap, mergeMap, map } from 'rxjs/operators';
import { ListarIssueService } from '../../services/listar-issue.service';


@Injectable()

export class IssueEffects {

    constructor(private actions$: Actions, private issueService: ListarIssueService) {
     }

    cargarIssues$ = createEffect(
        () => this.actions$.pipe(
            ofType(ProvideIssues),
            // tap(data => console.log('effect tap', data)),
            mergeMap(
                () => this.issueService.getIssues('zamarrowski', 'Curso-React-Redux')
                    .pipe(
                    // tap(data => console.log('getUsers effect', data))
                    map(issues => ProvideIssues({issue: issues}))
                )
            )
        )
    );


}
