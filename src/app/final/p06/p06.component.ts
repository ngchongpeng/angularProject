  
import { Component, OnInit } from "@angular/core";
import { ChartDataset, ChartOptions, ChartType } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";


@Component({
  selector: 'app-p06',
  templateUrl: './p06.component.html',
  styleUrls: ['./p06.component.css']
})
export class P06Component {
  constructor() {}

  ngOnInit() {}

  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   scales: { xAxes: [{}], yAxes: [{}] },
  //   plugins: {
  //     datalabels: {
  //       anchor: "end",
  //       align: "end",
  //     },
  //   },
  // };

  // public barChartLabels: Label[] = ["2017", "2018", "2019", "2020", "2021"];
  // public barChartType: ChartType = "bar";
  // public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  // public barChartData: ChartDataset[] = [
  //   { data: [80, 81, 56, 55, 40], label: "Series A" },
  //   { data: [40, 19, 86, 27, 90], label: "Series B" },
  // ];
}
