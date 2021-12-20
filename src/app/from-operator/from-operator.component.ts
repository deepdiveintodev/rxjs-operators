import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.scss']
})
export class FromOperatorComponent implements OnInit {

  constructor() { }


  ordersArray = ['Fashion','Electronics', 'Mobile', 'Households'];
  order: Observable<string> = from(this.ordersArray);

  ngOnInit(): void {
    this.order.subscribe(data => {
      console.log(data);
    })
  }

}
