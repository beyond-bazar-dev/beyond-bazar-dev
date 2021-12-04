import { ScreenMeasureServiceService } from './../services/screen-measure-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-screen-measure',
  templateUrl: './screen-measure.component.html',
  styleUrls: ['./screen-measure.component.scss']
})
export class ScreenMeasureComponent implements OnInit {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }): void => {
      this.measureService.invalidate(matches)

    //   if(matches) {
    //     return [
    //       { title: 'Card 1', cols: 1, rows: 1 },
    //       { title: 'Card 2', cols: 1, rows: 1 },
    //       { title: 'Card 3', cols: 1, rows: 1 },
    //       { title: 'Card 4', cols: 1, rows: 1 }
    //     ];
    //   }

    //   return [
    //     { title: 'Card 1', cols: 2, rows: 1 },
    //     { title: 'Card 2', cols: 1, rows: 1 },
    //     { title: 'Card 3', cols: 1, rows: 2 },
    //     { title: 'Card 4', cols: 1, rows: 1 }
    //   ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private measureService: ScreenMeasureServiceService) { }

  ngOnInit(): void {
  }

}
