/**
 * Created by Jiechen on 2017/7/28.
 */
var myApp = angular.module("myApp");

myApp.controller("distanceCtrl",function ($scope) {
    console.log("距离量测控制器");
    $scope.longitude =113.2278216955;
    $scope.latitude = 28.1944116398;

    $scope.map = new BMap.Map("container3");//创建地图实例
    $scope.map.centerAndZoom(new BMap.Point($scope.longitude,$scope.latitude),13);//初始化地图，设置中心点和缩放级别
    $scope.map.addControl(new BMap.NavigationControl());
    $scope.map.addControl(new BMap.ScaleControl());
    $scope.map.addControl(new BMap.OverviewMapControl());
    $scope.map.enableScrollWheelZoom(true);
    $scope.myGeo = new BMap.Geocoder();

    $scope.myDis = new BMapLib.DistanceTool($scope.map,{
        linkStroke:2

    })
});