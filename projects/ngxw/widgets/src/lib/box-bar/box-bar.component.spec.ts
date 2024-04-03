import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBarComponent } from './box-bar.component';

describe('BoxBarComponent', () => {
  let component: BoxBarComponent;
  let fixture: ComponentFixture<BoxBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
