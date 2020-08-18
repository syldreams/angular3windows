import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeuxComponent } from './page-deux.component';

describe('PageDeuxComponent', () => {
  let component: PageDeuxComponent;
  let fixture: ComponentFixture<PageDeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
