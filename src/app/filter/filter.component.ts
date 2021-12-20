import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  datArry = [
    {id: 1, name: 'Anup', gender: 'Male'},
    {id: 2, name: 'Priyanks', gender: 'Female'},
    {id: 3, name: 'Vivek', gender: 'Male'},
    {id: 4, name: 'Sanjana', gender: 'Female'},
    {id: 5, name: 'Neha', gender: 'Female'},
  ];
  data;
  constructor() { }

  ngOnInit(): void {
    const source = from(this.datArry);

    //ex: filter by length
    source.pipe(
      filter(member => member.name.length > 6),
      toArray()
    ).subscribe(res => {
      this.data = res;
    });

  }

}
