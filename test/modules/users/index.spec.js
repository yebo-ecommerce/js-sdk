// Helper
const h = require('./../../helpers');

// Include the product module
import * as m from 'src/modules/users';

// Products Module!
describe('Products module', () => {
  // registerUser
  it('should return a User Registration', () => {
    //
    let  = m.registerUser()
    //
    h.expect().to.have.property('email');
    h.expect().to.have.property('password');
    h.expect().to.have.property('passwordConfirmation');
  });

  // loginUser
  it('should return a login user', () => {
    //
    let  = m.loginUser()
    //
    h.expect().to.have.property('email');
    h.expect().to.have.property('password');
  });

  // resetUser
  it('should return a password change', () => {
    //
    let  = m.resetUser()
    //
    h.expect().to.have.property('email');
    h.expect().to.have.property('storeUrl');
  });

  // resetUserReset
  it('should return a new password', () => {
    //
    let  = m.resetUserReset()
    //
    h.expect().to.have.property('token');
    h.expect().to.have.property('email');
    h.expect().to.have.property('password');
    h.expect().to.have.property('passwordConfirmation');
  });
});
