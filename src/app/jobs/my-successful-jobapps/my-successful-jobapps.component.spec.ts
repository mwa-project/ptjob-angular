import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuccessfulJobappsComponent } from './my-successful-jobapps.component';

describe('MySuccessfulJobappsComponent', () => {
  let component: MySuccessfulJobappsComponent;
  let fixture: ComponentFixture<MySuccessfulJobappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySuccessfulJobappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySuccessfulJobappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
