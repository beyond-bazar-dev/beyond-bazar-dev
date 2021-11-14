import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  ngOnInit(): void {
  }

}
