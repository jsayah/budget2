import { Injectable } from '@angular/core';
import { Transaction } from '../transaction';
import { User } from './user';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  transactionsRef: AngularFireList<any>;
  transactionRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}
  // Create Student
  AddTransaction(transaction: Transaction) {
    this.transactionsRef.push({
      transDate: transaction.transDate,
      transName: transaction.transName,
      transAmount: transaction.transAmount,
      transCatagory: transaction.transCatagory,
    });
  }
  // Fetch Single Student Object
  GetTransaction(id: string) {
    this.transactionRef = this.db.object('transaction-list/' + id);
    return this.transactionRef;
  }
  // Fetch Students List
  GetTransactionsList() {
    this.transactionsRef = this.db.list('transactions-list');
    return this.transactionsRef;
  }
  // Update Student Object
  UpdateTransaction(transaction: Transaction) {
    this.transactionRef.update({
      transDate: transaction.transDate,
      transName: transaction.transName,
      transAmount: transaction.transAmount,
      transCatagory: transaction.transCatagory,
    });
  }
  // Delete Student Object
  DeleteTransaction(id: string) {
    this.transactionRef = this.db.object('transactions-list/' + id);
    this.transactionRef.remove();
  }
}