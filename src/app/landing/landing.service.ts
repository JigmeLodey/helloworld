import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LandingService {
  contactUsCollection : AngularFirestoreCollection;
  value: Observable<any>
  constructor( private http: HttpClient, private store: AngularFirestore) {
    this.setValue();
   }
   setValue() {
     this.value = this.store.collection('Job_detail').snapshotChanges().pipe(
       map(res => res.map( a => {
         const data = a.payload.doc.data() as any;
         data.id = a.payload.doc.id;
        return data;
       }
       ))
     )
   }
   getValue() {
     return this.value;
   }
  postMessage(message){
    return this.store.collection('Contact-Us').add(message);
  }
  postSubscribe(email){
    return this.store.collection('Subscribe').add(email);
  }
}
