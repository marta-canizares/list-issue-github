import { TestBed } from '@angular/core/testing';

import { ListarIssueService } from './listar-issue.service';

describe('ListarIssueService', () => {
  let service: ListarIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarIssueService);
  });

});
