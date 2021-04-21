import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-benchmark-barchart',
  templateUrl: './benchmark-barchart.component.html',
  styleUrls: ['./benchmark-barchart.component.scss']
})
export class BenchmarkBarChartComponent implements OnInit {
  @Input() barStyle: string;
  @Input() configuration: string;
  @Input() configurationType: string;
  @Input() customElement: string;
  @Input() name: string;
  config: any = undefined;

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {

    this.config = {
      view: undefined,
      single: [],
      // options
      animations: true,
      showXAxis: true,
      showYAxis: true,
      gradient: false,
      showLegend: false,
      showXAxisLabel: true,
      xAxisLabel: this.name,
      showYAxisLabel: false,
      yAxisLabel: 'Y Label',
      showDataLabel: true,
      barPadding: 10,
      colorScheme: {
        domain: ['#808080']
      },
      customColors: [
        {
          name: this.customElement,
          value: '#2C73D2'
        }
      ]
    }

    this.dataService.loadComputerBenchmarks(this.configuration, this.configurationType)
      .subscribe(config => {
        this.config.single = config as any[];
      });
  }

  onSelect(data): void {
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
