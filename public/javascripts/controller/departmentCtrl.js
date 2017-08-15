/**
 * Created by Jiechen on 2017/7/28.
 */
var myApp = angular.module("myApp");

myApp.controller("departmentCtrl",function ($scope) {
   console.log("this is departmentCtrl") ;
   $scope.departs = [
      { DepartsName:"应急办",DepartsId:1},
      { DepartsName:"运控中心",DepartsId:2},
      { DepartsName:"消防护卫部",DepartsId:3},
      { DepartsName:"医疗救援中心",DepartsId:4},
      { DepartsName:"华南蓝天油料",DepartsId:5},
      { DepartsName:"空港实业",DepartsId:6},
      { DepartsName:"空管局",DepartsId:7},
      { DepartsName:"监管局",DepartsId:8}
      ];

   $scope.newDepartType =function () {
      $scope.departs.push({DepartsName:$scope.newDepartsName, DepartsId: $scope.newDepartsId});
      $scope.newDepartsName ="";
      $scope.newDepartsId="";
   };

   $scope.deleteDepartsType = function ($index) {
      $scope.departs.splice($index,1);
   };
});