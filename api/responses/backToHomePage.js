/**
 * Usage:
 *
 * ```
 * res.backToHomePage();    // (default to 200 "OK" status code)
 * res.backToHomePage(400);
 * ```
 *
 */

module.exports = function backToHomePage (statusCode){

  // Get access to `req` and `res`
  // (since the arguments are up to us)
  var req = this.req;
  var res = this.res;

  // All done- either send back an empty response w/ just the status code
  // (e.g. for AJAX requests)
  if (req.wantsJSON) {
    return res.send(statusCode||200);
  }
  // or redirect to the home page
  return res.redirect('/');
};
