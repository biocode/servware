// == SECTION linking

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'ROUTELINKS', url: 'httpl://test/links' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
success
{
  body: "",
  headers: {
    link: "</>; rel=\"up via service\"; foo=\"bar\", </link>; rel=\"self service\", <http://grimwire.com>; rel=\"service\"; title=\"best site in world of web\""
  },
  reason: "OK",
  status: 200
}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'METHODLINKS1', url: 'httpl://test/links' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
success
{
  body: "",
  headers: {
    link: "</>; rel=\"up via service\"; foo=\"bar\", </link>; rel=\"self service\", <http://grimwire.com>; rel=\"service\"; title=\"best site in world of web\", </foo>; rel=\"item\"; title=\"method link\""
  },
  reason: "OK",
  status: 200
}
*/

done = false;
startTime = Date.now();
var res = local.dispatch({ method: 'METHODLINKS2', url: 'httpl://test/links' });
res.then(printSuccess, printError).always(finishTest);
wait(function () { return done; });

/* =>
success
{
  body: "",
  headers: {
    link: "</>; rel=\"up via service\"; foo=\"bar\", </link>; rel=\"self service\", <http://grimwire.com>; rel=\"service\"; title=\"best site in world of web\", </bar>; rel=\"item\"; title=\"method link 1\", </baz>; rel=\"item\"; title=\"method link 2\""
  },
  reason: "OK",
  status: 200
}
*/