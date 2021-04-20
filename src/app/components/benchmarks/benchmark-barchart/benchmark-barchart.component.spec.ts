import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BenchmarkBarChartComponent } from './benchmark-barchart.component';


describe('BenchmarkBarChartComponent', () => {
  let component: BenchmarkBarChartComponent;
  let fixture: ComponentFixture<BenchmarkBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenchmarkBarChartComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchmarkBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
