import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Service } from 'src/app/shared/services/service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';


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
  
  @ViewChild(NgForm) transForm: NgForm;

  addTransaction(){
    this.transDate = this.transDate.toString();
    this.transCost = this.transCost.toString();
    this.transName = this.transName.toString();
    this.transCatagory = this.transCatagory.toString();
    this.service.addTransaction("", this.transName, this.transCost, this.transCatagory, this.transDate, this.authService.userData.uid);
  }

}
