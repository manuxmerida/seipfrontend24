import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadfisicaComponent } from './unidadfisica.component';

describe('UnidadfisicaComponent', () => {
  let component: UnidadfisicaComponent;
  let fixture: ComponentFixture<UnidadfisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnidadfisicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnidadfisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
