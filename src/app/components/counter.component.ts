import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `        
    <button (click)="decrement.emit()">-</button>
    Current Count: {{ counter }}
    <button (click)="increment.emit()">+</button>    
    <br/>    
    <br/>
    <button (click)="reset.emit()">Reset Counter</button>
  `
})
export class CounterComponent {
  @Input() counter: number;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
}
