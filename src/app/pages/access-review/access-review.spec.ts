import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessReview } from './access-review';

describe('AccessReview', () => {
  let component: AccessReview;
  let fixture: ComponentFixture<AccessReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessReview],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessReview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
