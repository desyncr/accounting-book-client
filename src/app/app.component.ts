import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

import { Account } from './models/account';
import { Transaction } from './models/transaction';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Accounting book';

  transactions: Transaction[];
  account: Account;

  defaultAccount = '89618263481836485756';

  constructor(private apiService: ApiService) {
    this.account = new Account(this.defaultAccount)

    const accountReq = apiService.getBalance(this.account);
    accountReq.subscribe((balance: Account) => {
      this.account = balance;
    });

    const transactionsReq = apiService.getTransactions(this.account);
    transactionsReq.subscribe((transactions: Transaction[]) => {
      this.transactions = transactions.reverse();
    });
  }

  public updateAccount(form: object): void {

  }
}
