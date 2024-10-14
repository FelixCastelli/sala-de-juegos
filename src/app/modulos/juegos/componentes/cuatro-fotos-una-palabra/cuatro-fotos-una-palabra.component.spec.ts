import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuatroFotosUnaPalabraComponent } from './cuatro-fotos-una-palabra.component';

describe('CuatroFotosUnaPalabraComponent', () => {
  let component: CuatroFotosUnaPalabraComponent;
  let fixture: ComponentFixture<CuatroFotosUnaPalabraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuatroFotosUnaPalabraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuatroFotosUnaPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
