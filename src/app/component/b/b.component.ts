import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
})
export class BComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  componentBgColor: string = 'component';
  isPinkToggeled: boolean = false;

  changeBgColor(): void {
    if (this.componentBgColor === 'component') {
      this.componentBgColor = 'component pink';
      this.isPinkToggeled = true;
      console.log(this.isPinkToggeled);
    } else {
      this.componentBgColor = 'component';
      this.isPinkToggeled = false;
      console.log(this.isPinkToggeled);
    }
  }
}
