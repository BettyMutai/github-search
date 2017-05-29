var User = require("./../js/github.js").userModule;

var displayRepository = function (name, reponame) {
  $("#result").text("");
  if(reponame.name){
    $("#result").append("<h3>"+reponame.name+"</h3>");
  }
};

$(document).ready(function(){
  var currentUser = new User();
  $("#search").click(function(event){
    event.preventDefault();


currentUser.getUser(name, displayRepository);
  });
});
