import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

import { Account } from './models/account';
import { Transaction } from './models/transaction';
import { Observable, Subscriber } from 'rxjs';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  transactions: Transaction[] = [];
  account: Account;

  accountNumber = environment.defaultAccount;

  constructor(private apiService: ApiService) {
    this.getAccountInformation(this.accountNumber);
  }

  public updateAccount(form: object): void {
    this.getAccountInformation(this.accountNumber);
  }

  private getAccountInformation(account: string): void {
    this.account = new Account(account);

    const accountReq = this.apiService.getBalance(this.account);
    accountReq.subscribe((acc: Account) => {
      this.account.balance = acc.balance;
    }, (err) => {
      this.account.balance = 0;
    });

    const transactionsReq = this.apiService.getTransactions(this.account);
    transactionsReq.subscribe((transactions: Transaction[]) => {
      this.transactions = transactions.reverse();
    }, (err) => {});

  }
}
