import { Component, OnInit } from '@angular/core';
import { LBStorage } from '@sdk/lb-storage';
import { HOST } from '@sdk/config';
import { Resuqets } from '@sdk/requests';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  me: any;
  constructor() { }

  ngOnInit() {
    Resuqets.get(`${HOST}/users/me`).subscribe(result => {
      console.log(result);
      this.me = result;
    });
  }

}
