import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: []
})
export class IncrementerComponent implements OnInit {
  @Input()label: string = 'placeholder';
  @Input()progress: number = 50;
  @Output() progressChanged: EventEmitter<number> = new EventEmitter();
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
    this.progressChanged.emit(this.progress);
  }

  onChange(value: number) {
    const elemHTML: any = document.getElementsByName('progress')[0];
    elemHTML.value = Number( this.progress);

    if ( value >= 100) {
      this.progress = 100;
    } else if ( value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    this.progressChanged.emit(this.progress);

}}
