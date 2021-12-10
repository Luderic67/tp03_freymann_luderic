import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private scroller: ViewportScroller) {}

  scrollTo(target: string): void {
    this.scroller.scrollToAnchor(target);
  }
}
