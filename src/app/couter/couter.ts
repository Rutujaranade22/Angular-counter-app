import { Component } from '@angular/core';

@Component({
  selector: 'app-couter',
  templateUrl: './couter.html',
  styleUrls: ['./couter.css']   // ✅ should be styleUrls not styleUrl
})
export class Couter {
  count = 0;
  maxLimit = 10;  // ✅ set your max limit here

  handleIncrement() {
    if (this.count < this.maxLimit) {
      this.count++;
      if (this.count === this.maxLimit) {
        window.alert('You reached the limit!');
      }
    }
  }

  handleReset() {
    this.count = 0;
  }

  handleDecrement() {
    this.count = this.count - 1;
  }
}
