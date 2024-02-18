
import { TestBed } from '@angular/core/testing';
import { BudgetService } from './budget.service';

describe('BudgetService', () => {
  let service: BudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate total cost correctly', () => {

    const nPag = 5;
    const nLang = 2;
    const totalCost = service.calculateTotalCostPages(nPag, nLang);

    expect(totalCost).toEqual(300);
  });
});
