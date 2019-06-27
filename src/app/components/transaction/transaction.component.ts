import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.sass']
})
export class TransactionComponent implements OnInit {
  @Input() transaction: any;

  constructor() { }

  ngOnInit() {
  }

  public typeToLabel(typeStr: string): string {
      return typeStr === 'debit' ? 'Extracción' : 'Crédito';
  }
}
