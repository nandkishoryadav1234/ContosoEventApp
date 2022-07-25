import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './Payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {
public paymentDetail:any;
  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res => { 
        this.paymentDetail=res;
        console.log(this.paymentDetail);
      },    
      err => {
        console.log(err); }                                                                                      
      

    );
  }

}
