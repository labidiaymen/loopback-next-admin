import { Component } from '@angular/core';
import { LabRouter } from '@sdk/lab-router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
    LabRouter.subscribe(url => this.router.navigateByUrl(url));
  }
}
