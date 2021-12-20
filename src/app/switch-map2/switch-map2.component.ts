import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map2',
  templateUrl: './switch-map2.component.html',
  styleUrls: ['./switch-map2.component.scss']
})
export class SwitchMap2Component implements OnInit {

  constructor() { }

  getData(data) {
    return of(data + 'Video Uploaded')
  }

  ngOnInit(): void {
    const source = from(['Tech',  'Comedy', 'News']);
    source.pipe(map(data => this.getData(data))).subscribe(res => {
      console.log(res);
    })
  }

}
