import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdowngraphComponent } from './breakdowngraph.component';

describe('BreakdowngraphComponent', () => {
  let component: BreakdowngraphComponent;
  let fixture: ComponentFixture<BreakdowngraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakdowngraphComponent]
    });
    fixture = TestBed.createComponent(BreakdowngraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
