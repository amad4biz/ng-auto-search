import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface BlogPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {


 // apiUrl="https://jsonplaceholder.typicode.com/users";

 

 // queryUrl: string = '?search=';

 private apiUrl = 'https://jsonplaceholder.typicode.com';
 
 

  constructor(private http: HttpClient) { }



  fetchUsers(id: string): Observable<any> {
   
    return this.http.get<BlogPost[]>(`${this.apiUrl}/users?userId=${id}`)
    
    .pipe(
     
      catchError(err => of([]))
    );
  }


  getUser(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/" + 'users/'+ id).pipe(
      catchError(err => of(null))
    );
  } 


  getUserAssets(email: string){

    let options = {

      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic '  + btoa(environment.Username + ':' + environment.Password),
  
      }),
      params: new HttpParams().set('upn', email)             
                              
      
    }

    return this.http.get(this.apiUrl, options)

  }



  // getUsers():Observable<any>{

  //   return this.http.get<any>(this.apiUrl)
  // }



  // search(terms: Observable<string>) {
  //   return terms.debounceTime(400)
  //     .distinctUntilChanged()
  //     .switchMap(term => this.searchEntries(term));
  // }

  // searchEntries(term) {
  //   return this.http
  //       .get(this.apiUrl + this.queryUrl + term)
  //       .pipe(map(res => res));
  // }



}
