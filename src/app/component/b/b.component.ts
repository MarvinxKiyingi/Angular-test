import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
})
export class BComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.getData();
  }
  componentBgColor: string = 'component';
  @Input() valueFromParent: string;
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
    localStorage.setItem('Component-B', this.componentBgColor);
  }
  getData(): void {
    const getColor = localStorage.getItem('Component-B');
    const getSavedInputValue = localStorage.getItem('InputValue');
    if (!getColor) {
      localStorage.setItem('Component-B', this.componentBgColor);
    } else {
      this.componentBgColor = getColor;
      this.valueFromParent = getSavedInputValue;
    }
  }
}
