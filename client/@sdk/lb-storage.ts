import { isObject } from 'lodash';
import { isString } from 'lodash';

export class LBStorage {

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
   * @param  {string} token
   * @returns bollean
   */
  static saveToken(token: string): boolean {
    if (isString(token)) {
      localStorage.setItem('lb_token', token);
      return true;
    } else {
      return false;
    }
  }

  /**
   * @returns string
   */
  static loadToken(): string {
    const token = localStorage.getItem('lb_token') || '';
    return token;
  }

  /**
   * @returns boolean
   */
  static resetToken(): boolean {
    try {
      localStorage.removeItem('lb_token');
      return true;
    } catch (e) {
      return false;
    }
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

  /**
   * @returns any
   */
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
