import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  sub1: Subscription;
  constructor() { }

  ngOnInit(): void {
    const broadCastVideos = interval(1000);
    this.sub1 = broadCastVideos.pipe(
      map(data =>  'Video' + data)
    ).subscribe(res => {
      console.log(res);
    });

    setTimeout(()=> {
      this.sub1.unsubscribe()
    }, 10000);

  }

}
