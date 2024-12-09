import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoovlyhomePage } from './moovlyhome.page';

describe('MoovlyhomePage', () => {
  let component: MoovlyhomePage;
  let fixture: ComponentFixture<MoovlyhomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoovlyhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
