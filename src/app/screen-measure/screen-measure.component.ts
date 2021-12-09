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
  called = false
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
        return matches
    })
  )

  constructor(private breakpointObserver: BreakpointObserver, private measureService: ScreenMeasureServiceService) { }

  ngOnInit(): void {
    this.cards.subscribe((isHandset: Boolean) => {
      this.measureService.invalidate(isHandset.valueOf())
      console.log("breakpoint observer called");
    })
  }

}
