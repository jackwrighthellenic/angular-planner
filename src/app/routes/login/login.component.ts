import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/AccountService';
import { Account } from 'src/app/services/models/Account.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(public accountService: AccountService) {}

  login(values: Account) {
    this.accountService.login(values.username, values.password);
  }

  logout() {
    this.accountService.logout();
  }
}
