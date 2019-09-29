import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPeopleComponent } from './details-people.component';

describe('DetailsPeopleComponent', () => {
  let component: DetailsPeopleComponent;
  let fixture: ComponentFixture<DetailsPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
