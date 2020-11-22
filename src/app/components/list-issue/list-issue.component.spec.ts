import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIssueComponent } from './list-issue.component';

describe('ListIssueComponent', () => {
  let component: ListIssueComponent;
  let fixture: ComponentFixture<ListIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListIssueComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
