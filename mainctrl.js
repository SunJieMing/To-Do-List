var toDoList = angular.module('toDoList');
toDoList.controller('mainCtrl', function($scope, toDoService){

  $scope.display = toDoService.getDate();


 var getParseData = function(){
  toDoService.getData()
  .then(function(data){
    $scope.toDoList = data;
  });

 }
$scope.addNewItem = function(){
  toDoService.addItem($scope.newItem);
  $scope.newItem = '';
  getParseData();
}

 getParseData();
  $scope.toDoList = toDoService.getData();


});