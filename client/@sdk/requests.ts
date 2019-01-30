import { Observable, from } from 'rxjs';
import { LBStorage } from './lb-storage';
const parseJSON = (response) => {
  return new Promise((resolve) => response.json()
    .then((json) => resolve({
      status: response.status,
      ok: response.ok,
      json,
    })));
};
export class Resuqets {

  /**
   * @param  {string} url
   * @param  {any} body
   * @returns void
   */
  static post(url: string, body: any): Observable<any> {
    const post = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + LBStorage.loadToken()
      },
      body: JSON.stringify(body)
    }).then(parseJSON);

    return from(post);
  }

  static get(url: string, query?: any): Observable<any> {
    const get = fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + LBStorage.loadToken()
      },
    }).then(respense => respense.json());

    return from(get);
  }
}
