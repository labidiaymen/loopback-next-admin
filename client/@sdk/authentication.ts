import { Resuqets } from './requests';
import { HOST } from './config';
import { Observable, BehaviorSubject } from 'rxjs';
import { LBStorage } from './lb-storage';
import { LabRouter } from './lab-router';
import { GlobalRoute } from './default-router';

export const authenticated = new BehaviorSubject<any>({});
export class Authentication {
  constructor(private resuqets: Resuqets) {

  }

  /**
   * @returns Promise
   */
  static async check(): Promise<any> {
    const me = await Resuqets.get(`${HOST}/users/me`).toPromise();
    if ('error' in me) {
      LabRouter.next(GlobalRoute.Login);
    } else {
      authenticated.next(me);
    }
  }

  /**
   * @param  {} data={}
   * @returns Observable
   */
  static register(data = {}): Observable<any> {
    return Resuqets.post(HOST + '/users', data);
  }

  /**
   * @param  {} data={}
   * @returns Observable
   */
  static login(data = {}): Observable<any> {
    return Resuqets.post(HOST + '/users/login', data);
  }

  static logout(): void {
    LBStorage.resetToken();
    LabRouter.next(GlobalRoute.Login);
  }
}
