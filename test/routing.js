// == SECTION routing

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'GET', url: 'httpl://test/route/str/foo' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
success
{
  body: "foo",
  headers: {"content-type": "text/plain"},
  reason: "OK",
  status: 200
}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'GET', url: 'httpl://test/route/str/5' });
res.then(printError, printSuccess).always(finishTest);
wait(function () { return done; });

/* =>
success
{body: "", headers: {}, reason: "Not Found", status: 404}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'GET', url: 'httpl://test/route/num/5' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
success
{body: "5", headers: {"content-type": "text/plain"}, reason: "OK", status: 200}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'GET', url: 'httpl://test/route/num/foo' });
res.then(printError, printSuccess).always(finishTest);
wait(function () { return done; });

/* =>
success
{body: "", headers: {}, reason: "Not Found", status: 404}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'PUT', url: 'httpl://test/route/str/foo' });
res.then(printError, printSuccess).always(finishTest);
wait(function () { return done; });

/* =>
success
{body: "", headers: {}, reason: "Method Not Allowed", status: 405}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'HEAD', url: 'httpl://test/route/str/foo' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
success
{body: "", headers: {}, reason: "No Content", status: 204}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'GET', url: 'httpl://test/route/tokens/a' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
success
{body: "a", headers: {"content-type": "text/plain"}, reason: "OK", status: 200}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'GET', url: 'httpl://test/route/tokens/a/b' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
success
{
  body: "a & b",
  headers: {"content-type": "text/plain"},
  reason: "OK",
  status: 200
}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'GET', url: 'httpl://test/route/tokens/a/group/b' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
success
{
  body: "a & b",
  headers: {"content-type": "text/plain"},
  reason: "OK",
  status: 200
}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'GET1', url: 'httpl://test/route/middleware' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
success
{
  body: "bar",
  headers: {"content-type": "text/plain"},
  reason: "OK",
  status: 200
}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'GET2', url: 'httpl://test/route/middleware' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
success
{
  body: "baz",
  headers: {"content-type": "text/plain"},
  reason: "OK",
  status: 200
}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'GET', url: 'httpl://test/route/pre-and-post-methods' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
success
{
  body: "abc",
  headers: {"content-type": "text/plain"},
  reason: "OK",
  status: 200
}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'GET2', url: 'httpl://test/route/pre-and-post-methods' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
error
{body: "", headers: {}, reason: "Method Not Allowed", status: 405}
*/