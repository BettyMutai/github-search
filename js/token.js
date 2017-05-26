var apiKey = require("./../.env").apiKey;
var user = function(){

};

user.prototype.getuser = function (name, displayFunction) {
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    displayFunction(name, response.name);
   $("#result").text(response.name);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

  exports.userModule = user;
