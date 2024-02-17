import { Component, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BudgetService } from '../services/budget.service';
import { EventEmitter } from '@angular/core';
import { NgbdModalOptions } from '../shared/modal/modal.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule, NgbdModalOptions],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements OnInit {

  @Output() costPages = new EventEmitter<number>();


  public panelForm: FormGroup = this.fb.group({
    nPags: [1, [Validators.required, Validators.min(1)]],
    nLangs: [1, [Validators.required, Validators.min(1)]],
  });

  constructor(
    private fb: FormBuilder,
    public budgetService: BudgetService,

  ) { }

  public pagsTotal: number = 0;
  public langsTotal: number = 0;



  upLanguages():void {
    const nLangs = this.panelForm.get('nLangs');

    if(nLangs){
      const courseQuanty = nLangs.value || 1;
      nLangs.setValue(courseQuanty + 1);
    }

  }

  downLanguages():void {
    const nLangs = this.panelForm.get('nLangs');

    if(nLangs){
      const courseQuanty = nLangs.value || 1;
      if (courseQuanty !== 1) nLangs.setValue(courseQuanty - 1);
    }

  }

  upPages():void {
    const nPags = this.panelForm.get('nPags');

    if(nPags){
      const courseQuanty = nPags.value || 1;
      nPags.setValue(courseQuanty + 1);
    }

  }

  downPages():void {
    const nPags  = this.panelForm.get('nPags');

    if(nPags){
      const courseQuanty = nPags.value || 1;
      if(courseQuanty !== 1) nPags.setValue(courseQuanty - 1);
    }

  }


  ngOnInit() {
    this.panelForm.valueChanges.subscribe((values) => {
      this.pagsTotal = values.nPags;
      this.langsTotal = values.nLangs;
    })
  }

  get nPags(){
    return this.panelForm.get('nPags');
  }

  get nLangs(){
    return this.panelForm.get('nLangs');
  }

  calculate(): number {
    const pages = this.panelForm.get('nPags')?.value;
    const languages = this.panelForm.get('nLangs')?.value;
    const calculated = this.budgetService.calculateTotalCostPages(pages, languages);

    this.costPages.emit(calculated);

    return calculated

  }
}

