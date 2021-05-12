import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
})
export class AComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.getColorData();
  }

  componentBgColor: string = 'component';
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
    localStorage.setItem('Component-A', this.componentBgColor);
  }
  getColorData(): void {
    const getColor = localStorage.getItem('Component-A');
    if (!getColor) {
      localStorage.setItem('Component-A', this.componentBgColor);
      this.componentBgColor = this.componentBgColor;
    } else {
      this.componentBgColor = getColor;
    }
  }
}
