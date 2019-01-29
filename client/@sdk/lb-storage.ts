import { isObject } from 'lodash';
import { isString } from 'lodash';

class LBStorage {

  /**
   * @param  {any} user
   */
  static setUser(user: any) {
    let userToSave = user;
    if (isObject(user)) {
      userToSave = JSON.stringify(user);
    }
    localStorage.setItem('lb_user', userToSave);
  }

  /**
   * @returns any
   */
  static getUser(): any {
    try {
      const userString = localStorage.getItem('lb_user');
      return JSON.parse(userString);
    } catch (e) {
      console.error(e);
      return {};
    }
  }

  /**
   * @param  {} context
   * @returns void
   */
  static saveContext(context): void {
    let contextToSave = context;
    if (isObject(context)) {
      contextToSave = JSON.stringify(context);
    }
    localStorage.setItem('lb_context', contextToSave);
  }

  static getContext(): any {
    try {
      const contextString = localStorage.getItem('lb_context');
      return JSON.parse(contextString);
    } catch (e) {
      console.error(e);
      return {};
    }
  }

  /**
   * @param  {string} url
   * @returns boolean
   */
  static pushUrls(url: string): boolean {
    try {
      let urlList: any = localStorage.getItem('lb_urls');
      if (!urlList) {
        urlList = [];
      }
      urlList.push(url);
      localStorage.setItem('lb_urls', JSON.stringify(urlList));
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
