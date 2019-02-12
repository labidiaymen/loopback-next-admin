import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticated, Authentication } from '@sdk/authentication';
import { LabRouter } from '@sdk/lab-router';
import { GlobalRoute } from '@sdk/default-router';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private menuService: MenuService) { }

  href = '';
  me: any = {};
  breadcrumb: string[];
  menus = [];
  /**
   * @returns void
   */
  ngOnInit(): void {
    Authentication.check();
    authenticated.subscribe(me => this.me = me);
    this.href = this.router.url;
    this.breadcrumb = this.href.split('/');
    this.addMenus();
    this.menuService.dashboardMenus().subscribe((menus) => {
      console.log(menus);
      this.menus = menus;
    });
  }
  /**
   * @returns void
   */
  addMenus(): void {
    this.menuService.addDashboardMenus([
      {
        iconType: 'home',
        text: 'Home',
        key: 'home_menu_key',
        chields: [
          {
            iconType: 'mail',
            text: 'Mail',
            key: 'mail_menu_key'
          }, {
            iconType: 'star',
            text: 'Favorite',
            key: 'favorite_menu_key'
          }
        ]
      },
      {
        iconType: 'step-backward',
        text: 'Hello Menu',
        key: 'home_menu_key'
      }
    ]);

  }

  /**
   * @returns void
   */
  onLogout(): void {
    Authentication.logout();
  }

}
