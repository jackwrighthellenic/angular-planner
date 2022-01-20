import { Component } from '@angular/core';
import {
  faCalendarDay,
  faPen,
  faPlus,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { AccountService } from 'src/app/services/AccountService';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  constructor(public accountService: AccountService) {}

  faPlus = faPlus;
  faPen = faPen;
  faCalendarDay = faCalendarDay;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
}
