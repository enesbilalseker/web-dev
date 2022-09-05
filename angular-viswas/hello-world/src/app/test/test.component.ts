import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{name2}}</h2>
    <h2>{{greet}}</h2>
    <h2>{{name2 |lowercase}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styles: [`div{
    color:red;}
    `]
})

export class TestComponent implements OnInit {

  @Input('parentData') public name: any;
  @Output() public childEvent = new EventEmitter();

  public greet = "";
  public name2 = "Enes";
  public message = "Welcome to Hell";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  constructor(private _greet: TestserviceService) { }

  ngOnInit(): void {
    this.greet = this._greet.getMessage();
  }

  fireEvent() {
    this.childEvent.emit('hello dantus')
  }

}
