import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styles: []
})
export class ChartsComponent implements OnInit {

  charts: any = {
    'chart1': {
      'labels': ['t1', 't2', 't3'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyend': 'Test 1'
    },
    'chart2': {
      'labels': ['men', 'women'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyend': 'Test 2'
    },
    'chart3': {
      'labels': ['Yes', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyend': 'Test 3'
    },
    'chart4': {
      'labels': ['No', 'Yes'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyend': 'Test 4'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
