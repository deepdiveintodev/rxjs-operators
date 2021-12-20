import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exclusive: boolean = false;
  constructor(private rxjs: RxjsService) { }

  ngOnInit(): void {
    this.rxjs.exclusive.subscribe(res => {
      this.exclusive = res;
    });
  }

}
