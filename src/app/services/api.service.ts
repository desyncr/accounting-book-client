import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transaction } from '../models/transaction';
import { Account } from '../models/account';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private apiRoot: string;

    constructor(private httpClient: HttpClient) {
        this.apiRoot = 'http://127.0.0.1:4567/accounts';
    }

    public getBalance(account: Account) {
        return this.httpClient.get<Account>(`${this.apiRoot}/${account.account}`);
    }

    public getTransactions(account: Account): Observable<Transaction[]> {
        return this.httpClient.get<Transaction[]>(`${this.apiRoot}/${account.account}/transactions`);
    }

    public addTransaction(txt: Transaction) {}

    public getTransaction(account: Account, txt: Transaction) {
        return this.httpClient.get<Transaction>(`${this.apiRoot}/${account.account}/transactions/${txt.id}`);
    }
}
