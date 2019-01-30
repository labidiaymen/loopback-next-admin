import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }
  href = '';
  breadcrumb: string[];
  ngOnInit() {
    this.href = this.router.url;
    this.breadcrumb = this.href.split('/');
  }

}
