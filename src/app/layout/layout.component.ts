import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  imgTemplate = 'https://place-hold.it/25x25/ccc/666';
  numbersOne = [10, 30, 50, 70, 90];
  numbersTwo = [20, 40, 60, 70, 80, 90];

  constructor() {}

  ngOnInit(): void { }

  setImgStr(str: string): string {
    return this.imgTemplate + '?text=' + str;
  }
}
