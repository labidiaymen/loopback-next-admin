import { Observable, from } from 'rxjs';
const parseJSON = (response) => {
  return new Promise((resolve) => response.json()
    .then((json) => resolve({
      status: response.status,
      ok: response.ok,
      json,
    })));
}
export class Resuqets {
  /**
   * Parses the JSON returned by a network request
   *
   * @param  {object} response A response from a network request
   *
   * @return {object}          The parsed JSON, status from the response
   */

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
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(parseJSON);

    return from(post);
  }
}
