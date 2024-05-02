import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectTestingComponent } from './object-testing.component';

describe('ObjectTestingComponent', () => {
  let component: ObjectTestingComponent;
  let fixture: ComponentFixture<ObjectTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectTestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render name of the student', () => {
    const fixture = TestBed.createComponent(ObjectTestingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('0'))
  })

});
