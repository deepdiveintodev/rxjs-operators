import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.scss']
})
export class OfOperatorComponent implements OnInit {


  agents: Observable<string>;
  agentName: string;


  studenList = ['Mark', 'Ram', 'Sita', 'Lisa'];
  students: Observable<string[]> = of(this.studenList);

  studentNames: Observable<string> = of('Ram');

  studentObj = {
    id: 10,
    name: 'Ram'
  }

  student$: Observable<any> = of(this.studentObj);

  constructor() { }

  ngOnInit(): void {
    this.students.subscribe(data => {
      console.log(data);
    });

    this.studentNames.subscribe(data => {
      console.log(data);
    });

    this.student$.subscribe(data => {
      console.log(this.student$);
    });
  }

}
