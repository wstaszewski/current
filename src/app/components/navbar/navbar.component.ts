import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { NavItem } from '../../models/navItem';
import { NavService } from '../../services/nav.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  watcher: Subscription;
  navItems: NavItem[];
  namedButtons: NavItem[] = [];
  iconButtons: NavItem[] = [];
  overflowMenuItems: NavItem[] = [];
  image: string = '/assets/logo/WS-CC.png';

  constructor(public navService: NavService, public mediaObserver: MediaObserver) { }

  ngOnInit() {
    // Assume this is a file read or HttpClient request that completes after the first event.
    this.navService.getNavItems().subscribe((items: NavItem[]) => {
      this.navItems = items;
      this.onMediaChange();

      this.mediaObserver.asObservable()
        .pipe(
          distinctUntilChanged((prev, curr) => prev[0].mqAlias === curr[0].mqAlias),
          map((arr: MediaChange[]) => arr.map((change: MediaChange) => this.onMediaChange())),
        )
    });
  }

  ngOnDestroy() {
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }

  onMediaChange() {
    let items = this.navItems.slice();
    this.namedButtons = [];
    this.iconButtons = [];
    this.overflowMenuItems = [];

    if (this.mediaObserver.isActive('xs')) {
      this.iconButtons = this.iconButtons.concat(items.splice(0, 5));
    } else if (this.mediaObserver.isActive('sm')) {
      this.namedButtons = this.namedButtons.concat(items.splice(0, 6));
    } else if (this.mediaObserver.isActive('md')) {
      this.namedButtons = this.namedButtons.concat(items.splice(0, 8));
    } else if (this.mediaObserver.isActive('lg')) {
      this.namedButtons = this.namedButtons.concat(items.splice(0, 12));
    } else if (this.mediaObserver.isActive('xl')) {
      this.namedButtons = this.namedButtons.concat(items.splice(0, 16));
    }

    if (items.length > 0) {
      this.overflowMenuItems = items;
    }
  }
}
