import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  calculateTotalCostPages(nPag: number, nLang: number): number {

    return nPag * nLang * 30;
  }
}

