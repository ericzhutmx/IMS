/**
 * Created by Jiechen on 2017/7/28.
 */
var myApp = angular.module("myApp");

myApp.controller("drawCtrl",function ($scope) {
   console.log("方格图控制器");
   // $scope.longitude =113.2278216955;
   // $scope.latitude = 28.1944116398;
   //
   // $scope.map = new BMap.Map("squareMap");//创建地图实例
   // $scope.map.centerAndZoom(new BMap.Point($scope.longitude,$scope.latitude),13);//初始化地图，设置中心点和缩放级别
   // $scope.map.addControl(new BMap.NavigationControl());
   // $scope.map.addControl(new BMap.ScaleControl());
   // $scope.map.addControl(new BMap.OverviewMapControl());
   // $scope.map.enableScrollWheelZoom(true);
   // $scope.myGeo = new BMap.Geocoder();
   //
   // $scope.myDis = new BMapLib.DistanceTool($scope.map,{
   //    linkStroke:2
   //
   // });
   //
   // $scope.overlays = [];
   //  $scope.overlaycomplete = function (e) {
   //      overlays.push(e.overlay);
   //  };
   //
   // $scope.styleOptions = {
   //     strokeColor:"red",
   //     fillColor:"red",
   //     strokeWeight:3,
   //     strokeOpacity:0.8,
   //     fillOpacity:0.6,
   //     strokeStyle:"solid"
   // };
   //
   // $scope.drawingManager = new BMapLib.DrawingManager($scope.map,{
   //     isOpen:false,//是否开启绘制模式
   //     enableDrawingTool:true, //是否显示工具栏
   //     drawingToolOptions:{
   //         anchor:BMAP_ANCHOR_TOP_RIGHT,//位置
   //         offset: new Bmap.Size(5,5)//偏离值
   //     },
   //
   //     circleOptions:styleOptions,//圆的样式
   //     polylineOptions:styleOptions,//线的样式
   //     polygonOptions: styleOptions, //多边形的样式
   //     rectangleOptions: styleOptions //矩形的样式
   //
   // });
   //
   //  //添加鼠标绘制工具监听事件，用于获取绘制结果
   //  $scope.drawingManager.addEventListener('overlaycomplete', $scope.overlaycomplete);
   //  function clearAll() {
   //      for(var i = 0; i < overlays.length; i++){
   //          $scope.map.removeOverlay($scope.overlays[i]);
   //      }
   //      $scope.overlays.length = 0
   //  }



    $scope.map = new BMap.Map("squareMap");
    $scope.map.centerAndZoom(new BMap.Point(113.2278216955, 28.1944116398), 13);

    $scope.myDrawingManagerObject = new BMapLib.DrawingManager(
        $scope.map,
        {
        isOpen: true,
        drawingType: BMAP_DRAWING_MARKER,
        enableDrawingTool: true,
        enableCalculate: false,
        drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT,
            offset: new BMap.Size(5, 5),
            drawingTypes : [
                BMAP_DRAWING_MARKER,
                BMAP_DRAWING_CIRCLE,
                BMAP_DRAWING_POLYLINE,
                BMAP_DRAWING_POLYGON,
                BMAP_DRAWING_RECTANGLE
            ]
        },
        polylineOptions: {
            strokeColor: "#333"
        }}
        );
});