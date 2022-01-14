import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My PC Configuration';

  isLoaded: boolean = false;
  ishttpLoaded: boolean = false;

  constructor(private route: Router) { }

  ngOnInit() {

    // setTimeout(() => {
    //   console.log('a');
    // },
    //   5000);

    this.route.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isLoaded = true;
        }
        else if (event instanceof NavigationEnd) {
          this.isLoaded = false;
        }
      },
      error => {
        this.isLoaded = false;
        console.log(error);
      })
  }

}
