import { Resuqets } from './requests';

export class Authentication {
  constructor(private resuqets: Resuqets) {

  }
  static register() {
    Resuqets.post('', {})
      .subscribe((data) => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
}
