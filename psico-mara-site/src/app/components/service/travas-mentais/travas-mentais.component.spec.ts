import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravasMentaisComponent } from './travas-mentais.component';

describe('TravasMentaisComponent', () => {
  let component: TravasMentaisComponent;
  let fixture: ComponentFixture<TravasMentaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravasMentaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravasMentaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
