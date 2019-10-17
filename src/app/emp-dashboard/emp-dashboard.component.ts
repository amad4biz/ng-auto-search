import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {
  user: any;
  assets: any;

  constructor(private activateRoute: ActivatedRoute, private apiService: ApiService) { }
  id: any;


  ngOnInit() {

    this.id = this.activateRoute.snapshot.paramMap.get('id');

    console.log(this.id)

    this.apiService.getUser(this.id).subscribe((data)=>{

      this.user = data;


      return this.user;

      console.log(this.user)
    })

    this.getUserAssets()
    
  }



  getUserAssets(){

    console.log("user is", this.user)
    let email = ""
    this.apiService.getUserAssets(email).subscribe((data)=>{

      this.assets = data;
      console.log(this.assets)
    })
  }

}
