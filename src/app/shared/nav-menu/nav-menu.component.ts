import { Component } from '@angular/core';
import {
  faCalendarDay,
  faPen,
  faPlus,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  faPlus = faPlus;
  faPen = faPen;
  faCalendarDay = faCalendarDay;
  faSignInAlt = faSignInAlt;
}
