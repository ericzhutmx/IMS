/**
 * Created by Jiechen on 2017/7/29.
 */
var myApp = angular.module("myApp");

myApp.controller("hrCtrl",function ($scope,FileUploader) {
    console.log("这里是应急人员管理控制器");
    $scope.hrs = [
        {HrName:"李三",HrDepart:"机场消防二中队",HrTitle:"部门经理",HrPhone:"18672638912",HrAttr:"机场各部门",HrAsscoDepart:"消防护卫部"},
        {HrName:"王辰",HrDepart:"长沙国际机场有限公司",HrTitle:"员工",HrPhone:"18672638911",HrAttr:"应急救援领导小组",HrAsscoDepart:"空港实业"}
    ];
    $scope.newinput = false;
    // console.log($scope.newinput);

    $scope.uploader = new FileUploader();

    $scope.templatereverse = function () {
      $scope.newinput = !$scope.newinput;
    };

    $scope.newHrName ="";
    $scope.newHrDepart ="";
    $scope.newHrTitle ="";
    $scope.newHrPhone ="";
    $scope.newHrAttr ="";
    $scope.newHrAsscoDepart ="";

    $scope.newHr = function () {
      $scope.hrs.push({ HrName:$scope.newHrName,HrDepart:$scope.newHrDepart,HrTitle:$scope.newHrTitle,HrPhone:$scope.newHrPhone, HrAttr:$scope.newHrAttr,HrAsscoDepart:$scope.newHrAsscoDepart})
      $scope.newinput = !$scope.newinput;
    };

    $scope.deleteHr = function ($index) {
      $scope.hrs.splice($index,1);
    };
});