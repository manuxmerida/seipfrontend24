import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtepescaComponent } from './artepesca.component';

describe('ArtepescaComponent', () => {
  let component: ArtepescaComponent;
  let fixture: ComponentFixture<ArtepescaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtepescaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtepescaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
