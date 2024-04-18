import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdunidadfisicaComponent } from './updunidadfisica.component';

describe('UpdunidadfisicaComponent', () => {
  let component: UpdunidadfisicaComponent;
  let fixture: ComponentFixture<UpdunidadfisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdunidadfisicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdunidadfisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
