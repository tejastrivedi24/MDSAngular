import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Ord} from '../models/Ord';
import { Observable } from 'rxjs';
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type': 'applocation/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orderUrl:string= 'https://jsonplaceholder.typicode.com/todos?_limit=10';

  constructor(private http:HttpClient) { }
  //Get Orders
  getorder():Observable<Ord[]>{
    return this.http.get<Ord[]>(this.orderUrl);


  }
  deleteOrder(x:Ord):Observable<Ord>{
    const url="${this.orderUrl}/${x.id}";
    return this.http.delete<Ord>(url,httpOptions);
  }

  addOrder(x:Ord):Observable<Ord>{

    return this.http.post<Ord>(this.orderUrl,x,httpOptions);
  }
  toggleCompleted(x: Ord):Observable<any>{
    const url="${this.orderUrl}/${x.id}";
    return this.http.put(url,x,httpOptions);
  }
}

