import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../../services/options.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  isVisible: boolean = false;
  optionsDisplay: string = "none";
  listCount = ['10', '15', '20', '25', '30']
  orderBy = ['Name', 'Price', 'Type']
  
  constructor(public optionsService: OptionsService) {
   }

  ngOnInit(): void {
  }

  showOptions(): void {
    this.isVisible = !this.isVisible;
    if(this.isVisible) {
      this.optionsDisplay = "inline-flex";
    }
    else {
      this.optionsDisplay = "none";
    }
  }

  changeColors(): void {
    this.optionsService.changeColors();
  }

  changeOrderBy(order: string): void {
    this.optionsService.changeOrderBy(order);
  }

  changeListCount(count: string): void {
    this.optionsService.changeListCount(count);
  }

}
