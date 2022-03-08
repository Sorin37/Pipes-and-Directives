import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss'],
})
export class EvenComponent implements OnInit {
  strings: string[] = ['This', 'is', 'just', 'me', 'testing', 'stuff', 'out'];
  dates: Date[] = [
    new Date(19, 7, 2001),
    new Date(23, 4, 2003),
    new Date(7, 7, 2006),
    new Date(5, 11, 2008),
    new Date(16, 8, 2011),
    new Date(28, 6, 2017),
  ];
  color: string = '';
  textToBeRepeated: string = 'Go!';
  constructor() {}

  ngOnInit(): void {}
}
