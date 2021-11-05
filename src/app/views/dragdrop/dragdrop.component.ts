import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss'],
})
export class DragdropComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const card = document.querySelector('.card');

    const mouseDown$ = fromEvent(card!, 'mousedown');
    const mouseUp$ = fromEvent(document, 'mouseup');
    const mouseMove$ = fromEvent(document, 'mousemove');

    const dragAndDrop$ = mouseDown$.pipe(
      map((e: any) => ({
        x: e.clientX,
        y: e.clientY,
        target: {
          x: e.target!.offsetLeft,
          y: e.target!.offsetTop,
        },
      })),
      switchMap((start) =>
        mouseMove$.pipe(
          map((e: any) => ({
            x: e.clientX - start.x + start.target.x,
            y: e.clientY - start.y + start.target.y,
          })),
          takeUntil(mouseUp$)
        )
      )
    );

    dragAndDrop$.subscribe((val) => {
      // @ts-ignoreee
      card.style.top = `${val.y}px`;
      // @ts-ignore
      card.style.left = `${val.x}px`;
    });
  }
}
