import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.scss']
})
export class BenchmarksComponent implements OnInit {
  configuration: any = "i7-2600k";
  orientation: string = "horizontal";
  passmarkCPU = "CPU Mark Relative to Top 10 Common Desktop CPUs";
  passmarkGPU = "G3D Mark Relative to Top 10 Common Desktop Videocards";
  cinebench = "Cinebench R23 Multi Core Score";
  isOpen: boolean = false;


  constructor(private readonly dataService: DataService, private readonly navService: NavService) { }

  ngOnInit(): void {
    this.orientation = (window.innerWidth < 800) ? "vertical" : "horizontal";


    this.navService.change.subscribe(isOpen => {
      if (!isOpen) {
        setTimeout(() => {
          this.isOpen = isOpen;
        },
          700);
      } else {
        this.isOpen = isOpen;
      }

    });
  }

  onResize(event) {
    this.orientation = (event.target.innerWidth < 800) ? "vertical" : "horizontal";
  }

}
