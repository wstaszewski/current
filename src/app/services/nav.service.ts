import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavItem } from '../models/navItem';

@Injectable({
  providedIn: 'root'
}) export class NavService {
  private navItems = [
    { label: 'current', path: 'current', iconName: 'build' },
    { label: 'performance', path: 'performance', iconName: 'assessment' },
    { label: 'history', path: 'history', iconName: 'history' },
    { label: 'comming soon', path: 'lock', iconName: 'lock' },
    { label: 'current', path: 'current', iconName: 'build' },
    { label: 'performance', path: 'performance', iconName: 'assessment' },
    { label: 'history', path: 'history', iconName: 'history' },
    { label: 'comming soon', path: 'lock', iconName: 'lock' }
  ];

  constructor() { }

  getNavItems(): Observable<NavItem[]> {
    return of(this.navItems);
  }
}


