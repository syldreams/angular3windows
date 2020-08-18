import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTroisComponent } from './page-trois.component';

describe('PageTroisComponent', () => {
  let component: PageTroisComponent;
  let fixture: ComponentFixture<PageTroisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTroisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
