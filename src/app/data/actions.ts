import { createAction, props } from '@ngrx/store';


export const ProvideIssues = createAction('Provide Issues', props<{ issue: any[] }>());
