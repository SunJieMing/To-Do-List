var app = angular.module('toDoList');

app.service('toDoService', function($http, $q){

  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var returnString = month + '/' + day + '/' + year;


  this.getDate = function(){
  return returnString;
  };



this.getData = function(){
  var d = $q.defer();
  $http({
    method: 'GET',
    headers: {'X-Parse-Application-Id':'n55IvvKBlUCUkGzbthVBxyRjvEl8ZlphjAb3GG7Q', 'X-Parse-REST-API-Key':'HwWIIGPWVi9Oc4aiO13l4f5piYbtXhsCgX8DnWrJ'},
    url: 'https://api.parse.com/1/classes/PrivateList'
  }).success(function(data){
    d.resolve(data.results);
  });
  return d.promise;
 };

 this.addItem = function(item){
  var obj = {
task: item
  };
  $http({
    method: 'POST',
    headers:{'X-Parse-Application-Id':'n55IvvKBlUCUkGzbthVBxyRjvEl8ZlphjAb3GG7Q', 'X-Parse-REST-API-Key':'HwWIIGPWVi9Oc4aiO13l4f5piYbtXhsCgX8DnWrJ'},
    url:'https://api.parse.com/1/classes/PrivateList',
    data:obj
  });
 };

});
