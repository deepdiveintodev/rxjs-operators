import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { debounce, debounceTime, distinctUntilChanged, map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements AfterViewInit {
  @ViewChild('searchForm') searchForm: NgForm;
  constructor() { }

  ngAfterViewInit(): void {
    const formValue = this.searchForm.valueChanges;
    formValue.pipe(
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(res => {
      console.log(res);
    });
  }

}
