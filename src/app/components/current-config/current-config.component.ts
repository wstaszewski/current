import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IntersectionStatus } from '../../models/from-intersection-observer';

@Component({
  selector: 'app-current-config',
  templateUrl: './current-config.component.html',
  styleUrls: ['./current-config.component.scss']
})
export class CurrentConfigComponent implements OnInit {
  image: string = 'assets/images/12.jpg';

  visibilityStatus: { [key: number]: IntersectionStatus } = {};
  intersectionStatus = IntersectionStatus;

  list = [];

  private renderer: Renderer2;

  @ViewChild('imgContainer') imgContainer: ElementRef;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    var reveals = document.querySelectorAll('.reveal');
    var hide = document.querySelectorAll('.hide');

    const windowheight = window.innerHeight;
    var rtop = reveals[0].getBoundingClientRect().top;
    var rpoint = -450;

    if (rtop < windowheight - rpoint) {
      hide[0].classList.remove('active');
    }
    else {
      hide[0].classList.add('active');
    }

    for (var i = 0; i < reveals.length; i++) {

      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active');

      }
      else {
        reveals[i].classList.remove('active');
      }
    }

  }

  constructor() { }

  ngOnInit(): void {
    for (let n = 0; n < 10; n++) {
      this.list.push(n);
    }

  }

  onVisibilityChanged(index: number, status: IntersectionStatus) {
    this.visibilityStatus[index] = status;
  }

  trackByIndex(index: number) {
    return index;
  }

}
