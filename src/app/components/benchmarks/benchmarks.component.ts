import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.scss']
})
export class BenchmarksComponent implements OnInit {
  configuration: any = "i7-2600k";
  orientation: string = "horizontal";
  cpuName = "CPU Mark Relative to Top 10 Common Desktop CPUs";
  gpuName = "G3D Mark Relative to Top 10 Common Desktop Videocards";



  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {

  }

  onResize(event) {
    this.orientation = (event.target.innerWidth < 800) ? "vertical" : "horizontal";
  }

}
