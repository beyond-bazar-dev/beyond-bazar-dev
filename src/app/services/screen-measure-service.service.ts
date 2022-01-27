import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenMeasureServiceService {
  isHandset: boolean;

  layoutObservable: Observable<Boolean>;

  private isHeadsetSubject : Subject<Boolean>;

  public invalidate(isHandset:boolean) {
      this.isHeadsetSubject.next(isHandset);
      console.log("service -change activated"+isHandset )
  }

  constructor() {
    this.isHandset = false;
    this.isHeadsetSubject = new Subject();
    this.layoutObservable = this.isHeadsetSubject.asObservable();
  }
}
