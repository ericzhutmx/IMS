/**
 * Created by Jiechen on 2017/7/31.
 */
var myApp = angular.module("myApp");

myApp.controller("governCtrl",function ($scope) {
    console.log("这里是政府机关控制器");
    $scope.governs = [
        {GovernName:"岳麓区政府", GovernLevel:"区政府", GovernAddress:"长沙市岳麓区金星北路一段517号", GoverCord:"是"},
        {GovernName:"黄花镇政府", GovernLevel:"镇政府", GovernAddress:"长沙市长沙县黄花镇黄回路158号", GoverCord:"否"},
        {GovernName:"长沙县政府", GovernLevel:"县政府", GovernAddress:"长沙市星沙镇开元路39号", GoverCord:"否"}
    ];

    $scope.newGovernName = "";
    $scope.newGovernLevel = "";
    $scope.newGovernAddress = "";
    $scope.newGoverCord = "";

    $scope.newGovern = function () {
      $scope.governs.push({GovernName:$scope.newGovernName,GovernLevel:$scope.newGovernLevel,GovernAddress:$scope.newGovernAddress,GoverCord:$scope.newGoverCord})
    };

    $scope.deleteGovern = function ($index) {
        $scope.governs.splice($index,1);
    };
});