/**
 * Created by Jiechen on 2017/7/24.
 */
var myApp = angular.module('myApp');

myApp.controller('appCtrl',function ($scope) {
    console.log("this is appCtrl");
    $scope.test = 'jiechen';

});