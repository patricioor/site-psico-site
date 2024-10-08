import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipnoterapiaComponent } from './hipnoterapia.component';

describe('HipnoterapiaComponent', () => {
  let component: HipnoterapiaComponent;
  let fixture: ComponentFixture<HipnoterapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HipnoterapiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipnoterapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
