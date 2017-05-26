var user = require("./../js/token.js").userModule;

var displayRepository = function (name, reponame) {
  $("#result").text(reponame);
};

$(document).ready(function(){
  var currentUser = new user();
  $("#search").submit(function(event){
    event.preventDefault();

    var name=$("#username").val();
    $("#username").val("");

currentUser.getuser(name, displayRepository);
  });
});
