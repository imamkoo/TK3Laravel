import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBarangComponent } from './edit-barang.component';

describe('EditBarangComponent', () => {
  let component: EditBarangComponent;
  let fixture: ComponentFixture<EditBarangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBarangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
