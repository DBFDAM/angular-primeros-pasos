import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter</h1>
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetButton()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>

  `,

})
export class CounterComponent {
  constructor(){}

  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;

  }

  decreaseBy( value: number ):void {
    this.counter -= value;

  }

  resetButton() {
    this.counter = 10;
  }



}
