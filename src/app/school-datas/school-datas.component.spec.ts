import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDatasComponent } from './school-datas.component';

describe('SchoolDatasComponent', () => {
  let component: SchoolDatasComponent;
  let fixture: ComponentFixture<SchoolDatasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolDatasComponent]
    });
    fixture = TestBed.createComponent(SchoolDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
