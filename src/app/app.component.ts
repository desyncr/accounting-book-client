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

  defaultAccount = environment.defaultAccount;

  constructor(private apiService: ApiService) {
    this.account = new Account(this.defaultAccount)

    const accountReq = apiService.getBalance(this.account);
    accountReq.subscribe((account: Account) => {
      this.account.balance = account.balance;
    }, (err) => {});

    const transactionsReq = apiService.getTransactions(this.account);
    transactionsReq.subscribe((transactions: Transaction[]) => {
      this.transactions = transactions.reverse();
    }, (err) => {});
  }

  public updateAccount(form: object): void {

  }
}
