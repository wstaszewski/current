import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../../services/nav.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  @ViewChild('hamburger') hamburger: ElementRef<HTMLInputElement>;
  @ViewChild('navLinks') navLinks: ElementRef<HTMLInputElement>;

  wasHamburgerClicked: boolean = false;
  image: string = 'assets/logo/WS.png';

  constructor(private readonly navService: NavService) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  onHambugerClick() {
    this.navService.toggle();

    //this.wasHamburgerClicked = !this.wasHamburgerClicked;
    this.navLinks.nativeElement.classList.toggle("open");

    for (let item of Array.from(this.navLinks.nativeElement.children)) {
      item.classList.toggle("fade");
    }

    this.hamburger.nativeElement.classList.toggle("toggle");
  }

  onNavigation() {
    this.navService.off();

    //this.wasHamburgerClicked = !this.wasHamburgerClicked;
    this.navLinks.nativeElement.classList.toggle("open");

    for (let item of Array.from(this.navLinks.nativeElement.children)) {
      item.classList.toggle("fade");
    }

    this.hamburger.nativeElement.classList.toggle("toggle");

  }

}
