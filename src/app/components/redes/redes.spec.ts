import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Redes } from './redes';

describe('Redes', () => {
  let component: Redes;
  let fixture: ComponentFixture<Redes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Redes],
    }).compileComponents();

    fixture = TestBed.createComponent(Redes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
