import { Observable, from } from 'rxjs';

export class Resuqets {

  /**
   * @param  {string} url
   * @param  {any} body
   * @returns void
   */
  static post(url: string, body: any): Observable<any> {
    const post = fetch(url, {
      method: 'POST',
      body
    });
    return from(post);
  }
}
