import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from '../models/menuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menus = new BehaviorSubject<any>([]);

  constructor() { }

  /**
   * @returns Observable
   */
  dashboardMenus(): Observable<any> {
    return this.menus;
  }

  /**
   * @param  {any} newMenuItem
   * @returns void
   */
  addDashboardMenus(newMenuItem: MenuItem): void {
    const currentMenus = this.menus.getValue();
    currentMenus.push(newMenuItem);
    this.menus.next(currentMenus);
  }


}

