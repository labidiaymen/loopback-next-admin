import { Component, OnInit } from '@angular/core';
import { LBStorage } from '@sdk/lb-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(LBStorage.loadToken());
  }

}
