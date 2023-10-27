import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = 0; 

  isVisible: boolean = false;

  show() {
     this.isVisible = !this.isVisible
    //  console.log('clicked',this.isVisible)
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
     this.count=0
  }
}
