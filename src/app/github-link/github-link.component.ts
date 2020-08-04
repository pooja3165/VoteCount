import { Component, OnInit } from '@angular/core';
import {Githubservice} from './githubservice';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-github-link',
  templateUrl: './github-link.component.html',
  styleUrls: ['./github-link.component.css']
})
export class GithubLinkComponent implements OnInit {
  messages: any;
  p: number = 1;
  constructor(private _githubservice:Githubservice) { }

  ngOnInit(): void {
    this._githubservice.githubpoints().subscribe(
      data=>{
            this.messages=data.hits;
            console.log(this.messages);
      }
    )
  }
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'update vote level' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor:'#ff4700cc',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
}
