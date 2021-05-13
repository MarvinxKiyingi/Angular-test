import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
})
export class AComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.getData();
  }

  componentBgColor: string = 'component';
  printValue: string = '';

  changeBgColor(): void {
    if (this.componentBgColor === 'component') {
      this.componentBgColor = 'component pink';
      this.saveData();
      this.getData();
    } else {
      this.componentBgColor = 'component';
      this.saveData();
    }
  }
  saveData(): void {
    localStorage.setItem('Component-A', this.componentBgColor);
    localStorage.setItem('InputValue', this.printValue);
  }
  getData(): void {
    const getColor = localStorage.getItem('Component-A');
    if (!getColor) {
      localStorage.setItem('Component-A', this.componentBgColor);
      this.componentBgColor = this.componentBgColor;
    } else {
      this.componentBgColor = getColor;
      this.printValue = this.printValue;
    }
  }
  handleChange(iValue: string): void {
    this.printValue = iValue;
    this.saveData();
  }
}
