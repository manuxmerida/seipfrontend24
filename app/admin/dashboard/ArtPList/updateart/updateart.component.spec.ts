import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateartComponent } from './updateart.component';

describe('UpdateartComponent', () => {
  let component: UpdateartComponent;
  let fixture: ComponentFixture<UpdateartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
