import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
    Inline template
  </div>
  <h2>Welcome {{name}}</h2>`,
  styles: [`div{
    color:red;}
    `]
})
export class TestComponent implements OnInit {

  public name = "Vishwas";
  constructor() { }

  ngOnInit(): void {
  }

}
