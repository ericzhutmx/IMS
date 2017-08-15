/**
 * Created by Jiechen on 2017/7/25.
 */
var myApp = angular.module("myApp");
myApp.controller("userCtrl",function ($scope) {
   console.log("this is userCtrl");
   $scope.loggers = { LoggerName:"wanglihui",LoggerDpart:"应急办",LoggerRole:"应急管理员",LoggerTime:"2017/06/12",LoggerPhone:"186675828962",LoggerEmail:"wlh@mail.caac.com",LoggerComment:"" }

});