import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {
  @Input() account: Account;

  constructor() {
  }

  ngOnInit() {
  }

  public balance(account: Account): string {
    return `$ ${account.balance}`;
  }
}
