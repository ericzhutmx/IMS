/**
 * Created by Jiechen on 2017/7/24.
 */
var myApp = angular.module('myApp');

myApp.controller('planTypeCtrl',function ($scope) {
    console.log("this is planTypeCtrl!");

    $scope.plans = [
        {PlanName1:"航空器空中遇险",PlanName2:"航空器故障",PlanName3:"航空器1故障",PlanDate:"2017/01/01"},
        {PlanName1:"航空器空中遇险",PlanName2:"航空器故障",PlanName3:"航空器2故障",PlanDate:"2017/01/01"},
        {PlanName1:"航空器空中遇险",PlanName2:"遭遇危险天气",PlanName3:"",PlanDate:"2017/01/01"},
        {PlanName1:"航空器空中遇险",PlanName2:"危险品泄漏",PlanName3:"",PlanDate:"2017/01/01"},
        {PlanName1:"航空器跑道事件",PlanName2:"跑道外接地",PlanName3:"冲出跑道",PlanDate:"2017/01/01"},
        {PlanName1:"航空器跑道事件",PlanName2:"跑道外接地",PlanName3:"偏出跑道",PlanDate:"2017/01/01"}
    ];

    $scope.newPlanType =function () {
        $scope.plans.push({PlanName1:$scope.newPlanName1, PlanName2: $scope.newPlanName2,PlanName3: $scope.newPlanName3,PlanDate: $scope.newPlanDate});
        $scope.newPlanName1 ="";
        $scope.newPlanName2 ="";
        $scope.newPlanName3 ="";
        $scope.newPlanDate ="";
    };

    $scope.deletePlanType = function ($index) {
        $scope.plans.splice($index,1);
    };
});