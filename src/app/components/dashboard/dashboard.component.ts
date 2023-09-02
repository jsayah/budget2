import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Service } from 'src/app/shared/services/service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService, private service: Service) {
  }
  
  transDate;
  transCost;
  transName;
  transCatagory;

  ngOnInit(): void {
  }
  
  addTransaction(){
    this.service.addTransaction("62289836", this.transCost, "Doe", "Entertainment", "");
  }
}
