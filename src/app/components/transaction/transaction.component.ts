import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.sass'],
  viewProviders: [MatExpansionPanel]
})
export class TransactionComponent implements OnInit {
  @Input() transactions: Transaction[];

  constructor() { }

  ngOnInit() {
  }

  public typeToLabel(txt: Transaction): string {
      return txt.type === 'debit' ? 'Extracción' : 'Crédito';
  }

  public amount(txt: Transaction): string {
      const sign = txt.type === 'debit' ? '-' : '';
      return `$ ${sign}${txt.amount}`;
  }

  public description(txt: Transaction): string {
      return `${this.typeToLabel(txt)} de ${this.amount(txt)}.`;
  }
}
