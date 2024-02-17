import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from '../panel/panel.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent, ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  changeBorderColor(event: any, checkboxId: string) {
    const checkboxValue = this.homeForm.get(checkboxId)?.value;
    const greenCardElement = event.target.closest('.greenCards');

    if (checkboxValue) {
      greenCardElement.classList.add('border-success');
    } else {
      greenCardElement.classList.remove('border-success');
    }
  }

  public homeForm!: FormGroup;
  public totalCost = 0;



  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.homeForm= this.fb.group({
      bA01: [false],
      bA02: [false],
      bA03: [false],
    });

    this.homeForm.valueChanges.subscribe(() => {
      this.getTotalCost();
    });
  }

  getTotalCost() {  //languages-pages

    let totalCost = 0;

    if (this.homeForm.get('bA01')?.value) {
      totalCost += 300;
    }
    if (this.homeForm.get('bA02')?.value) {
      totalCost += 400;
    }
    if (this.homeForm.get('bA03')?.value) {
      totalCost += 500;
    }

    this.totalCost = totalCost
  }

  costTotalCost(event: number): void {
    this.totalCost = this.homeForm.get('bA03')?.value ? 500 : 0;
    this.totalCost += event;
  }

}



