import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Account } from './models/Account.model';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private accountSubject: BehaviorSubject<Account | null>;
  account: Observable<Account | null>;

  readonly FAKE_ACCOUNTS: Account[] = [
    {
      username: 'jackwright',
      password: 'password',
      firstname: 'Jack',
      lastname: 'Wright',
    },
    {
      username: 'admin',
      password: 'adminpass',
      firstname: 'Admin',
      lastname: 'User',
    },
    {
      username: 'a',
      password: 'a',
      firstname: 'A',
      lastname: 'A',
    },
  ];

  constructor(private router: Router) {
    this.accountSubject = new BehaviorSubject<Account | null>(
      (() => {
        const item = localStorage.getItem('account');
        return item ? JSON.parse(item) : null;
      })()
    );
    this.account = this.accountSubject.asObservable();
  }

  get user() {
    return this.accountSubject.value;
  }

  login(username: string, password: string): Observable<Account | null> {
    const subject = new Subject<Account | null>();

    setTimeout(() => {
      const account = this.FAKE_ACCOUNTS.find((account) => {
        return account.username === username && account.password === password;
      });

      if (account) {
        localStorage.setItem('account', JSON.stringify(account));
        this.router.navigate(['/']);
      } else {
        alert('Incorrect password!');
      }

      subject.next(account || null);
      subject.complete();
    }, 100);

    return subject;
  }

  logout() {
    localStorage.removeItem('account');
    this.accountSubject.next(null);
    this.router.navigate(['/']);
  }
}
