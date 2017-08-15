/**
 * Created by Jiechen on 2017/7/28.
 */
var myApp = angular.module("myApp");

myApp.controller("trafficCtrl",function ($scope) {
   console.log("this is trafficCtrl");
    $scope.longitude =113.2278216955;
    $scope.latitude = 28.1944116398;

        $scope.map = new BMap.Map("container2");//创建地图实例
        $scope.map.centerAndZoom(new BMap.Point($scope.longitude,$scope.latitude),13);//初始化地图，设置中心点和缩放级别
        $scope.map.addControl(new BMap.NavigationControl());
        // $scope.map.addControl(new BMap.ScaleControl());
        $scope.map.addControl(new BMap.OverviewMapControl());
        $scope.map.enableScrollWheelZoom(true);
        $scope.myGeo = new BMap.Geocoder();
        $scope.ctrl = new BMapLib.TrafficControl();
        $scope.map.addControl($scope.ctrl);
        $scope.ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);

});