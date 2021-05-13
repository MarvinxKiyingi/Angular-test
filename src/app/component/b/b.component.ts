import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
})
export class BComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.getColorData();
  }
  componentBgColor: string = 'component';
  @Input() valueFromParent: string;
  changeBgColor(): void {
    if (this.componentBgColor === 'component') {
      this.componentBgColor = 'component pink';
      this.saveColorData();
      this.getColorData();
    } else {
      this.componentBgColor = 'component';
      this.saveColorData();
    }
  }
  saveColorData(): void {
    localStorage.setItem('Component-B', this.componentBgColor);
  }
  getColorData(): void {
    const getColor = localStorage.getItem('Component-B');
    if (!getColor) {
      localStorage.setItem('Component-B', this.componentBgColor);
    } else {
      this.componentBgColor = getColor;
    }
  }
}
