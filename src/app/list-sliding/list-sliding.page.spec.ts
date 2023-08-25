import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSlidingPage } from './list-sliding.page';

describe('ListSlidingPage', () => {
  let component: ListSlidingPage;
  let fixture: ComponentFixture<ListSlidingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListSlidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
