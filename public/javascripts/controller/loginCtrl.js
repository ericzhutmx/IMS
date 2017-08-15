/**
 * Created by Jiechen on 2017/8/8.
 */
var myApp = angular.module("myApp");

myApp.controller("loginCtrl",function ($scope) {
   $scope.loginuser= {
       username:"admin",
       password:"admin"
   } ;

   $scope.username = "";
   $scope.password = "";
   $scope.login = function ($scope) {
      if($scope.loginuser.username === $scope.user&&$scope.loginuser.password===$scope.password){
          $state.go("daily")
      }
   };
});