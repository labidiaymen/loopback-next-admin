import { Resuqets } from './requests';
import { HOST } from './config';
import { Observable } from 'rxjs';

export class Authentication {
  constructor(private resuqets: Resuqets) {

  }
  static register(data = {}): Observable<any> {
    return Resuqets.post(HOST + '/users', data);
  }
}
