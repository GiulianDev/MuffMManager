import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HOMEPage } from './home.page';

describe('HOMEPage', () => {
  let component: HOMEPage;
  let fixture: ComponentFixture<HOMEPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HOMEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
