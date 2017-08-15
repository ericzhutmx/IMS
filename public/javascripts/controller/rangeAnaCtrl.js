/**
 * Created by Jiechen on 2017/7/28.
 */
var myApp = angular.module("myApp");

myApp.controller("rangeAnaCtrl",function ($scope) {
    console.log("范围分析控制器");
    $scope.map = new BMap.Map("rangeAna");
    $scope.map.centerAndZoom(new BMap.Point(113.2278216955, 28.1944116398), 13);
    $scope.map.addControl(new BMap.ScaleControl());
    $scope.map.enableScrollWheelZoom(true);

    //方格搜索
    $scope.keyword = "医院";
    $scope.pullBox = new  BMapLib.SearchInRectangle($scope.map,$scope.keyword,{
        renderOptions:{
            map:null,
            strokeWeight:3,
            strokeColor:"red",
            fillColor:"white",
            opacity:"0.5",
            followText:"拖拽鼠标搜索",
            autoClose:true,
            autoViewport:false,
            panel:"resultPanel",
            alwaysShowOverlay:true,
            selectFirstResult:true
        }
    });
    $scope.pullBox.setLineStyle("dashed");
    $scope.pullBox.setFillColor("white");

    //圆形搜索

});