import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikolaComponent } from './nikola.component';

describe('NikolaComponent', () => {
  let component: NikolaComponent;
  let fixture: ComponentFixture<NikolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NikolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
