import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  map,
  pluck,
  debounceTime,
  switchMap,
  catchError,
  distinctUntilChanged,
  startWith,
} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const input = fromEvent(document.querySelector('input')!, 'input');
    const ul = document.querySelector('ul');

    const results = (res: any) => {
      ul!.innerHTML = res.map((e: any) => `<li>${e}</li>`).join('');
    };

    const searchCountry = (term: any) =>
      ajax(`https://restcountries.com/v3.1/name/${term}`).pipe(
        pluck('response'),
        map((res) => res.map((e: any) => e.name.common))
      );

    input
      .pipe(
        debounceTime(300),
        pluck('target', 'value'),
        map((e: any) => e.trim()),
        distinctUntilChanged(),
        switchMap((term) => {
          if (!term || term.length < 3) return of([]);
          return searchCountry(term);
        }),
        catchError((err, source) => source.pipe(startWith([])))
      )
      .subscribe(results);
  }
}
