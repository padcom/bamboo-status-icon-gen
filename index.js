var app = require('express')();

app.get("/:token", function(request, response) {
  response.end("[![Build Status](http://[bamboo]/plugins/servlet/wittfied/build-status/" + request.params.token + ")](http://[bamboo]/browse/" + request.params.token + ")");
});

app.listen(process.env.PORT || 3000);
