import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class Service {
  constructor(private db: AngularFirestore) { }

  addTransaction(_newId:any, _transName:string, _tramsAmount:string, _transCatagory:string, _transDate:string) {
    this.db.collection("transactions").doc(_newId).set({date:_transDate,name:_transName,amount:_tramsAmount,catagory:_transCatagory});
 }


}