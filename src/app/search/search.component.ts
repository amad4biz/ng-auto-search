import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ApiService } from 'services/api.service';
import {liveSearch} from '../live.search.operator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private userIdSubject = new Subject<string>();

  // readonly blogPosts$ = this.userIdSubject.pipe(
  //   debounceTime(250),
  //   distinctUntilChanged(),
  //   switchMap(userId => this.apiService.fetchPosts(userId))
  // );

  users: any[] = []


  
  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit() {
  }


  readonly blogPosts$ = this.userIdSubject.pipe(

    liveSearch(userId => this.apiService.fetchUsers(userId))

  );


  searchPosts(userId: string) {
    this.userIdSubject.next(userId);
  }

viewDetail(blogPost){
 
    
   if(this.users.includes(blogPost)){

   
     console.log('exist')
     blogPost.id=+1
   }else{
    this.users.push(blogPost)
   }
  
  console.log(this.users)
 // this.route.navigate(['emp-dash', blogPost.id])
}

}
