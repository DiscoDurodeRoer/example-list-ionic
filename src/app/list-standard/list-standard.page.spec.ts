import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListStandardPage } from './list-standard.page';

describe('ListStandardPage', () => {
  let component: ListStandardPage;
  let fixture: ComponentFixture<ListStandardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListStandardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
