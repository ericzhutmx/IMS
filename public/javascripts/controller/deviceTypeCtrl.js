/**
 * Created by Jiechen on 2017/7/24.
 */

var myApp = angular.module('myApp');

myApp.controller('deviceTypeCtrl',function ($scope){
    console.log("this is deviceTypeCtrl");
  $scope.devices = [
      { DeviceName:"救援破拆器材",DeviceId:1},
      { DeviceName:"残损航空器搬移设备",DeviceId:2},
      { DeviceName:"救护车辆",DeviceId:3},
      { DeviceName:"消防车辆",DeviceId:4},
      { DeviceName:"其他",DeviceId:5}

  ];

    $scope.newDeviceType =function () {
      $scope.devices.push({DeviceName:$scope.newDeviceName, DeviceId: $scope.newDviceId});
      $scope.newDeviceName ="";
      $scope.newDviceId="";
    };

    $scope.deleteDeviceType = function ($index) {
        $scope.devices.splice($index,1);
    };






});