import { Resuqets } from './requests';
import { HOST } from './config';
import { Observable } from 'rxjs';

export class Authentication {
  constructor(private resuqets: Resuqets) {

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
}
