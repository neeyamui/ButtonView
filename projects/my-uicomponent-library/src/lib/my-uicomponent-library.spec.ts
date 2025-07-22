import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUIcomponentLibrary } from './my-uicomponent-library';

describe('MyUIcomponentLibrary', () => {
  let component: MyUIcomponentLibrary;
  let fixture: ComponentFixture<MyUIcomponentLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyUIcomponentLibrary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUIcomponentLibrary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
