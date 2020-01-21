import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css'],
  animations: [
    // animation triggers go here
    // transition('open => closed', [
    //   animate('1s')
    // ]),
  ]
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}