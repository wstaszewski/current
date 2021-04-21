import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) export class NavService {
  isOpen = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }

  off() {
    this.isOpen = false
    this.change.emit(this.isOpen);
  }
}


