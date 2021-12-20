import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  agents: Observable<string>;
  agentName: string;
  constructor() { }

  ngOnInit(): void {
    this.agents = new Observable(
      function(observer){
        try {
          observer.next('Ram');
          setInterval(() => {
            observer.next('Mark');
          }, 3000);

          setInterval(() => {
            observer.next('Sita');
          }, 6000);
          // observer.next('Mark');
          // observer.next('Sita');
        }
        catch(e) {
          observer.error(e);
        }
      }
    );

    this.agents.subscribe(data => {
      console.log(data);
      this.agentName = data;
    });
  }

}
