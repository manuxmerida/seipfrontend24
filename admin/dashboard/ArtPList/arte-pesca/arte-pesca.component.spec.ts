import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtePescaComponent } from './arte-pesca.component';

describe('ArtePescaComponent', () => {
  let component: ArtePescaComponent;
  let fixture: ComponentFixture<ArtePescaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtePescaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtePescaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
