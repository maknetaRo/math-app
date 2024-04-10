import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathActivityComponent } from './math-activity.component';

describe('MathActivityComponent', () => {
  let component: MathActivityComponent;
  let fixture: ComponentFixture<MathActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
