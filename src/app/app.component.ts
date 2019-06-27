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
  title = 'client2';
  transactions: Observable<Transaction[]>;
  defaultAccount: string;

  constructor(private apiService: ApiService) {
      this.defaultAccount = '89618263481836485756';

      const account = new Account();
      account.account = this.defaultAccount;
      this.transactions = apiService.getTransactions(account);
  }

  public updateAccount(form: object): void {
  }
}
