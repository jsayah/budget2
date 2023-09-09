import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class Service {
  constructor(private db: AngularFirestore) { }

  addTransaction(_newId:any, _transName:string, _tramsAmount:string, _transCatagory:string, _transDate:string, _transUID) {
    let id = this.db.createId();
    this.db.collection("transactions").doc(id).set({date:_transDate,name:_transName,amount:_tramsAmount,catagory:_transCatagory, UID:_transUID});
 }


}