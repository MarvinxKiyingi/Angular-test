import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
})
export class AComponent implements OnInit {
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
