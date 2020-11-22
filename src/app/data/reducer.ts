import { createReducer, on } from '@ngrx/store';
import { ProvideIssues } from './actions';

interface IssueState {
    issues: any[];
}

const initialIssueState: IssueState = {
    issues: [],
};



const IssueReducer = createReducer(
    initialIssueState,
    on(ProvideIssues, (state: IssueState, payload: any) => {
        return {
            ...state,
            issue: payload.issue,
        }
    })
);

export interface AppState {
    list: IssueState;
}



export const AppReducers = {
    list: IssueReducer,
};

