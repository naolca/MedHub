import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showNavLinks: boolean = false;

  toggleNavLinks() {
    this.showNavLinks = !this.showNavLinks;
  }
}
