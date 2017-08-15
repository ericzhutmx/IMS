/**
 * Created by Jiechen on 2017/7/29.
 */
var myApp = angular.module("myApp");

myApp.controller("teamCtrl",function ($scope) {
    console.log("这是救援队伍控制器");
    $scope.teams = [
        {TeamDepart:"值班经理室",TeamAttr:"机场应急救援",TeamPhone:"0731-8383776",TeamFax:"0731-83837769"},
        {TeamDepart:"航站楼运行控制中心",TeamAttr:"机场应急救援",TeamPhone:"0731- 86662222",TeamFax:"0731-86662507"},
        {TeamDepart:"上海机场（集团）有限公司安全运控中心",TeamAttr:"外部支援",TeamPhone:"虹桥机场（021-22381200）浦东机场（021-68347571）",TeamFax:""},
        {TeamDepart:"长沙市消防支队",TeamAttr:"外部支援",TeamPhone:"",TeamFax:""}
    ];

    $scope.newTeamDepart ="";
    $scope.newTeamAttr ="";
    $scope.newTeamPhone ="";
    $scope.newTeamFax ="";

    $scope.newTeam = function () {
        $scope.teams.push({TeamDepart:$scope.newTeamDepart,TeamAttr:$scope.newTeamAttr,TeamPhone:$scope.newTeamPhone,TeamFax:$scope.newTeamFax})
    };

    $scope.deleteTeam = function ($index) {
      $scope.teams.splice($index,1)
    };
});