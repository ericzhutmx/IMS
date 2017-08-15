/**
 * Created by Jiechen on 2017/7/31.
 */
var myApp = angular.module("myApp");

myApp.controller("communicationCtrl",function ($scope) {
    console.log("这里是通信设施控制器");
    $scope.communications = [
        {communicationsName:"雷达站01",  CommunicationAddress:"长沙市岳麓区金星北路一段517号", communicationsCord:"是"},
        {communicationsName:"雷达站02",  CommunicationAddress:"长沙市长沙县黄花镇黄回路158号", communicationsCord:"否"},
        {communicationsName:"雷达站03",  CommunicationAddress:"长沙市星沙镇开元路39号", communicationsCord:"否"}
    ];

    $scope.newcommunicationsName = "";
    $scope.newCommunicationAddress = "";
    $scope.newcommunicationsCord = "";

    $scope.newCommunication = function () {
        $scope.governs.push({communicationsName:$scope.newcommunicationsName,CommunicationAddress:$scope.newCommunicationAddress,communicationsCord:$scope.newcommunicationsCord})
    };

    $scope.deleteCommunication = function ($index) {
        $scope.communications.splice($index,1);
    };
});