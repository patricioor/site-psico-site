import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrgComponent } from './trg.component';

describe('TrgComponent', () => {
  let component: TrgComponent;
  let fixture: ComponentFixture<TrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
