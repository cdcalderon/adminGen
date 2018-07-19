import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: []
})
export class IncrementerComponent implements OnInit {
  @Input()label: string = 'placeholder';
  @Input()progress: number = 50;
  constructor() { }

  ngOnInit() {
  }


  updateProgress(value) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }
    this.progress = this.progress + value;
  }

}
