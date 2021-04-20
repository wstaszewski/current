import { Component, Input, OnInit } from '@angular/core';
import { DisplayConfig, ImageData, ImageEffect, SameSizeConfig } from '@creativeacer/ngx-image-display';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  @Input() configuration: string;
  panels: any[];

  images: Array<ImageData> = [];
  samesizeConfig: SameSizeConfig;
  displayconfig: DisplayConfig;
  hovereffect: ImageEffect;
  samesizeoption: boolean;
  fullscreenoption: boolean;
  hoverEffect: string = '';

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
    //temp
    this.configuration = 'i7-2600k';

    this.dataService.loadComputerPerformance(this.configuration)
      .subscribe(config => {
        this.panels = config as any[];
      });

    this.samesizeoption = true;

    this.displayconfig = {
      imageminwidth: '150px',
      //containerwidth: '60%',
      containerheight: 'auto',
      fullScreenView: true // Set to false to hide the top right full screen option
    };

    this.hovereffect = {
      hoverEffectActive: false
    };
    this.samesizeConfig = {
      active: true,
      imgContainerHeight: '250px'
    }
  }

  sameSizeimages(showSame) {
    this.samesizeoption = showSame;
  }

  hoverEffectFn() {
    const chosenEffect = 'lighten';
    const effectActive = false;

    this.hovereffect = {
      hoverEffectActive: effectActive,
      hoverEffect: chosenEffect
    };
    this.samesizeoption = !this.samesizeoption;
  }

}
