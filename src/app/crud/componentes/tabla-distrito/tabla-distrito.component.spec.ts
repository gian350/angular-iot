import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDistritoComponent } from './tabla-distrito.component';

describe('TablaDistritoComponent', () => {
  let component: TablaDistritoComponent;
  let fixture: ComponentFixture<TablaDistritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDistritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDistritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
