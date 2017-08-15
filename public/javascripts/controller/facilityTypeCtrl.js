/**
 * Created by Jiechen on 2017/7/24.
 */
var myApp = angular.module("myApp");
myApp.controller("facilityTypeCtrl",function ($scope) {
    console.log("this is facility Ctrl");
    $scope.facilities = [
        { FacilityName:"油库",FacilityId:1},
        { FacilityName:"塔台",FacilityId:2},
        { FacilityName:"仓库",FacilityId:3},
        { FacilityName:"加油站",FacilityId:4}
    ];

    $scope.newFacilityType =function () {
        $scope.facilities.push({FacilityName:$scope.newFacilityName, DeviceId: $scope.newFacilityId});
        $scope.newFacilityName ="";
        $scope.newFacilityId="";
    };

    $scope.deleteFacilityType = function ($index) {
        $scope.facilities.splice($index,1);
    };




});