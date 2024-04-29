import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomStringComponent } from './random-string.component';

describe('RandomStringComponent', () => {
  let component: RandomStringComponent;
  let fixture: ComponentFixture<RandomStringComponent>;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [ RandomStringComponent ] // Moved RandomStringComponent to imports
  })
  .compileComponents();
});

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('generateRandom should update value with a string of length 10', () => {
    component.generateRandom();
    expect(component.value).toBeTruthy();
    expect(component.value.length).toEqual(10);
  });

  it('generateString should return a string of requested length', () => {
    const length = 5;
    const result = component.generateString(length);
    expect(result).toBeTruthy();
    expect(result.length).toEqual(length);
  });
});
