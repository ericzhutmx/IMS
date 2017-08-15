/**
 * Created by Jiechen on 2017/7/31.
 */
var myApp = angular.module("myApp");

myApp.controller("shelterCtrl",function ($scope) {
    console.log("这里是避难场所控制器");
    $scope.shelters = [
        {ShelterName:"防空洞01",  ShelterAddress:"长沙市岳麓区金星北路一段517号", ShelterCord:"是"},
        {ShelterName:"避难所01",  ShelterAddress:"长沙市长沙县黄花镇黄回路158号", ShelterCord:"否"},
        {ShelterName:"避难所02", ShelterAddress:"长沙市星沙镇开元路39号", ShelterCord:"否"}
    ];

    $scope.newShelterName = "";
    $scope.newShelterAddress = "";
    $scope.newShelterCord = "";

    $scope.newShelter = function () {
        $scope.shelters.push({ShelterName:$scope.newShelterName,ShelterAddress:$scope.newShelterAddress,ShelterCord:$scope.newShelterCord})
    };

    $scope.deleteShelter = function ($index) {
        $scope.shelters.splice($index,1);
    };
});