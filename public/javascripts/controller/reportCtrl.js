/**
 * Created by Jiechen on 2017/7/25.
 */
var myApp = angular.module("myApp");

myApp.controller("reportCtrl",function ($scope) {
   console.log("this is ReportCtrl");

   $scope.rep = {};
   $scope.addReport = function ($scope) {
     $scope.rep.push( {ReporterName:$scope.newReporterName,
                       ReporterPhone:$scope.newReporterPhone,
                       ReportAccident:$scope.newReportAccident,
                       ReporterDepartment:$scope.newReporterDepartment,
                       AccidentName:$scope.newAccidentName,
                       AccidentTime:$scope.newAccidentTime,
                       AccidentAddress:$scope.newAccidentAddress,
                       AccidentLong:$scope.newAccidentLong,
                       AccidentLat:$scope.newAccidentLat,
                       AccidentDescription:$scope.newAccidentDescription,
                       AccidentReason:$scope.newAccidentReason});


       $scope.newReporterName = "";
       $scope.newReporterPhone ="";
       $scope.newReportAccident ="";
       $scope.newReporterDepartment ="";
       $scope.newAccidentName ="";
       $scope.newAccidentTime ="";
       $scope.newAccidentAddress ="";
       $scope.newAccidentLong ="";
       $scope.newAccidentLat ="";
       $scope.newAccidentDescription ="";
       $scope.newAccidentReason ="";

   };

   $scope.selected = [];
    $scope.selected.push(Item.Id)
});