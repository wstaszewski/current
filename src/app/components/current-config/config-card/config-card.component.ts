import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-config-card',
  templateUrl: './config-card.component.html',
  styleUrls: ['./config-card.component.scss']
})
export class ConfigCardComponent implements OnInit {

  @ViewChild('card__social') card__social: ElementRef<HTMLInputElement>;

  @Input() CardTitle: string;
  @Input() Date: string;
  @Input() Title: string;
  @Input() Content: string;
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
    this.CardTitle = 'Card Title';
    this.Date = Date.now().toString();
    this.Title = 'Lorem ipsum dolor sit amet';
    this.Content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    this.img = 'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg';

  }

  onClick() {

    this.card__social.nativeElement.classList.toggle("card__social--active");

  }

}
