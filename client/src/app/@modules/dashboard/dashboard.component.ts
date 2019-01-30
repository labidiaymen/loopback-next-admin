import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticated, Authentication } from '@sdk/authentication';
import { LabRouter } from '@sdk/lab-router';
import { GlobalRoute } from '@sdk/default-router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  href = '';
  me: any = {};
  breadcrumb: string[];

  /**
   * @returns void
   */
  ngOnInit(): void {
    Authentication.check();
    authenticated.subscribe(me => this.me = me);
    this.href = this.router.url;
    this.breadcrumb = this.href.split('/');
  }

  /**
   * @returns void
   */
  onLogout(): void {
    Authentication.logout();
  }

}
