import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.scss']
})
export class LoadingAnimationComponent implements OnInit {
  @Input() isLoading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
