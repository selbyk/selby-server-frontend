import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';
const { isEmpty } = Ember;

export default BaseAuthorizer.extend({
  /**
    Includes the access token from the session data into the `Authorization`
    header as a Bearer token, e.g.:
    ```
    Authorization: Bearer 234rtgjneroigne4
    ```
    @method authorize
    @param {Object} data The data that the session currently holds
    @param {Function} block(headerName,headerContent) The callback to call with the authorization data; will receive the header name and header content as arguments
    @public
  */
  authorize(data, block) {
    const accessToken = data['access_token'];
    if (!isEmpty(accessToken)) {
      block('Authorization', `Bearer ${accessToken}`);
    }
  }
});
