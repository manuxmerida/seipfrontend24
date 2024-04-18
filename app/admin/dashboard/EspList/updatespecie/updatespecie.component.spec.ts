import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatespecieComponent } from './updatespecie.component';

describe('UpdatespecieComponent', () => {
  let component: UpdatespecieComponent;
  let fixture: ComponentFixture<UpdatespecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatespecieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatespecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
