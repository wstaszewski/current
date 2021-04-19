import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  @Input() configuration: string;
  panels: any[];
  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    //temp
    this.configuration = 'i7-2600k';

    this.dataService.loadComputerPerformance(this.configuration)
      .subscribe(config => {
        this.panels = config as any[];
      });

  }

}
