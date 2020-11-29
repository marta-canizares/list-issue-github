import { createReducer, on, ActionReducerMap } from '@ngrx/store';
import { ProvideIssues } from '../actions/actions';

interface IssueState {
    issues: any[];
}

const initialIssueState: IssueState = {
    issues: []
};



export const IssueReducer = createReducer(
    initialIssueState,
    on(ProvideIssues, (state: IssueState, payload: any) => {
        return {
            ...state,
            issue: payload.issue,
        }
    })
);



export interface AppState {
    listIssue: IssueState;
}

export const AppReducers: ActionReducerMap<AppState> = {
    listIssue: IssueReducer,
};

