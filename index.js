var app = require('express')();

app.get("/:token", function(request, response) {
  var host = request.query.host || '[bamboo]';
  response.end("[![Build Status](http://" + host + "/plugins/servlet/wittified/build-status/" + request.params.token + ")](http://" + host + "/browse/" + request.params.token + ")");
});

app.listen(process.env.PORT || 3000);
