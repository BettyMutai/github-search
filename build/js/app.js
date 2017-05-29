(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "07a2d6350b22e51ccd67cbb53ff6126289cc109d"

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

var Username=$("#username").val();
$("#username").val("");

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
  };

exports.userModule = User;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/github.js":2}]},{},[3]);
