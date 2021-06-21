import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  colorsTheme: string;
  orderByValue: string;
  listCountValue: string;

  constructor() {
    this.loadLocalStorage();
   }

  changeColors(): void {
    if(this.colorsTheme == "theme-light") {
      this.colorsTheme = "theme-dark";
      localStorage.setItem('colorsTheme', this.colorsTheme );
    }
    else {
      this.colorsTheme = "theme-light"
      localStorage.setItem('colorsTheme', this.colorsTheme );
    }
  }

  changeOrderBy(order: string): void {
    this.orderByValue = order;
    localStorage.setItem('orderByValue', this.orderByValue );
  }

  changeListCount(count: string): void {
    this.listCountValue = count;
    localStorage.setItem('listCountValue', this.listCountValue );
  }

  getColors(): string {
    return this.colorsTheme;
  }  

  private loadLocalStorage(): void {
    this.colorsTheme = localStorage.getItem('colorsTheme');
    if(localStorage.getItem("colorsTheme") === null){
      this.colorsTheme = "theme-light";}
    this.orderByValue = localStorage.getItem('orderByValue');
    if(localStorage.getItem("orderByValue") === null){
      this.orderByValue = "Name";}    
    this.listCountValue = localStorage.getItem('listCountValue');
    if(localStorage.getItem("listCountValue") === null){
      this.listCountValue = "10";}
  }
}
