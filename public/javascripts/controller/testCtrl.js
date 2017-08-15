/**
 * Created by Jiechen on 2017/8/1.
 */
var myApp = angular.module("myApp");

myApp.controller("testCtrl",["$scope","NgTableParams",function ($scope,NgTableParams) {
   console.log("测试控制器");
   $scope.data=[
        { Name:"111",Money:1,Age:18},
        { Name:"222",Money:2,Age:90},
        { Name:"333",Money:3,Age:27}
    ];

    //
    // $scope.newTest = function () {
    //   $scope.tests.push({
    //       TestName:$scope.newTestName,
    //       TestId:$scope.newTestId,
    //       TestAge:$scope.newTestAge
    //   })
    // };
    //
    // $scope.newTestName ="";
    // $scope.newTestId ="";
    // $scope.newTestAge ="";
    //
    // $scope.deleteTest = function ($index) {
    //     $scope.tests.splice($index,1);
    // };
    $scope.deleteTest = function ($index) {
      $scope.data.splice($index,1);
    };

    $scope.self = this;
    $scope.self.tableParams = new NgTableParams({},{dataset:$scope.data})
}]);
