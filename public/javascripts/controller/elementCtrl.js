/**
 * Created by Jiechen on 2017/7/27.
 */
var myApp = angular.module("myApp");
myApp.controller("elementCtrl",function ($scope,$rootScope) {
    console.log("this is elementCtrl");
    $scope.address = null;
    $scope.longitude =113.2278216955;
    $scope.latitude = 28.1944116398;

        $scope.map = new BMap.Map("allmap");//创建地图实例
        $scope.map.centerAndZoom(new BMap.Point($scope.longitude,$scope.latitude),13);//初始化地图，设置中心点和缩放级别
        $scope.map.addControl(new BMap.NavigationControl());
        $scope.map.addControl(new BMap.ScaleControl());
        $scope.map.addControl(new BMap.OverviewMapControl());
        $scope.map.enableScrollWheelZoom(true);
        $scope.myGeo = new BMap.Geocoder();


    $scope.local = new BMap.LocalSearch($scope.map,{
        renderOptions:{}
    });

    $scope.gover = function () {
        $scope.local.search("政府")
    }
});