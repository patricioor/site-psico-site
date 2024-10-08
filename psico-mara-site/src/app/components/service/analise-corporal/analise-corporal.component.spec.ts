import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseCorporalComponent } from './analise-corporal.component';

describe('AnaliseCorporalComponent', () => {
  let component: AnaliseCorporalComponent;
  let fixture: ComponentFixture<AnaliseCorporalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseCorporalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliseCorporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
