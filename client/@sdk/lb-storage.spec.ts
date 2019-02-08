import { LBStorage } from './lb-storage';

describe('Lb storage', () => {
  it('should set user ', () => {
    LBStorage.setUser({});
    const lb_user = localStorage.getItem('lb_user');
    expect(lb_user).toBeFalsy();
  });
});
