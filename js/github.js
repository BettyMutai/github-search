var apiKey = require('./../.env').apiKey;

function User(){
}

User.prototype.getUser = function (name, displayFunction) {
  $.get("https://api.github.com/users/" + Username + "?access_token=" + apiKey).then(function(response) {
      console.log(response);
      $("#name").append('<a href=" ' + response.login + ' ">'+ '</a>');
      $("#html").append('<a href=" ' + response.html_url + ' ">'+ '</a>');
      $("#result").append('<img src=" ' + response.avatar_url + ' ">');
      $('#repos').append('<a href=" '+ response.repos_url + ' " >' + '</a>');
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });

exports.userModule = User;
