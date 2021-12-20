import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private rxjs: RxjsService) { }

  ngOnInit(): void {
    this.rxjs.exclusive.next(true);
  }

  ngOnDestroy() {
    this.rxjs.exclusive.next(false);
  }

}
