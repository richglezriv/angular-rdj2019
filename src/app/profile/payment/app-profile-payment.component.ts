import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-payment',
  templateUrl: './app-profile-payment.component.html',
  styleUrls: ['./app-profile-payment.component.scss']
})
export class AppProfilePaymentComponent{
  
  years: number[] = [];

  ngOnInit(){
    const today = new Date().getFullYear();
    
    for(let i = today; i >= today - 10; i--){
      this.years.push(i);
    }
    
  }
}