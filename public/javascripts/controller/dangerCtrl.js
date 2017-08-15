/**
 * Created by Jiechen on 2017/7/29.
 */
var myApp = angular.module("myApp");
myApp.controller("dangerCtrl",dangerCtrl);
dangerCtrl.$inject = ["NgTableParams"];
function dangerCtrl(NgTableParams) {
    var sources = [
        {SourceName:"机场中石油加油站",SourceAttr:"危险源/重大设施",SourceType:"加油站",SourceAddress:"长沙市中山路12号",SourceDepart:"中石化",SourceContact:"李四",SourcePhone:"18765373828",SourceToDepartment:"消防护卫部",SourceCord:"是"},
        {SourceName:"中石油油库",SourceAttr:"危险源",SourceType:"油库",SourceAddress:"",SourceDepart:"中外运",SourceContact:"刘文",SourcePhone:"12233445555",SourceToDepartment:"消防护卫部",SourceCord:"否"},
        {SourceName:"中外运集装箱货场",SourceAttr:"危险源",SourceType:"仓库",SourceAddress:"长沙市机场中外运9号货场",SourceDepart:"中外运",SourceContact:"刘文",SourcePhone:"12233445555",SourceToDepartment:"空港实业",SourceCord:"否"}
    ];
    var danger = this;
    var originalData = angular.copy(sources);
    danger.tableParams = new NgTableParams(
        {
            count:5
        },{
            filterDelay: 0,
            counts:[5,10,20],
            total:sources.length,
            dataset:angular.copy(sources)
        });
    danger.cancel = cancel;
    danger.del = del;
    danger.save = save;


    function cancel(row, rowForm) {
        var originalRow = resetRow(row, rowForm);
        angular.extend(row, originalRow);
    }

    function del(row) {
        _.remove(danger.tableParams.settings().dataset, function(item) {
            return row === item;
        });
        danger.tableParams.reload().then(function(data) {
            if (data.length === 0 && danger.tableParams.total() > 0) {
                danger.tableParams.page(danger.tableParams.page() -1);
                danger.tableParams.reload();
            }
        });
    }

    function resetRow(row, rowForm){
        row.isEditing = false;
        rowForm.$setPristine();
        danger.tableTracker.untrack(row);
        return _.findWhere(originalData, function(r){
            return r.id === row.id;
        });
    }

    function save(row, rowForm) {
        var originalRow = resetRow(row, rowForm);
        angular.extend(originalRow, row);
    }

    danger.helloworld = "朱杰辰123";
    console.log(danger.helloworld);
}

// myApp.controller("dangerCtrl",function ($scope, NgTableParams) {
//    console.log("这是危险源与重大设施控制器");
//     $scope.sources = [
//         {SourceName:"机场中石油加油站",SourceAttr:"危险源/重大设施",SourceType:"加油站",SourceAddress:"长沙市中山路12号",SourceDepart:"中石化",SourceContact:"李四",SourcePhone:"18765373828",SourceToDepartment:"消防护卫部",SourceCord:"是"},
//         {SourceName:"中石油油库",SourceAttr:"危险源",SourceType:"油库",SourceAddress:"",SourceDepart:"中外运",SourceContact:"刘文",SourcePhone:"12233445555",SourceToDepartment:"消防护卫部",SourceCord:"否"},
//         {SourceName:"中外运集装箱货场",SourceAttr:"危险源",SourceType:"仓库",SourceAddress:"长沙市机场中外运9号货场",SourceDepart:"中外运",SourceContact:"刘文",SourcePhone:"12233445555",SourceToDepartment:"空港实业",SourceCord:"否"}
//         ];
//
//     $scope.newSource = function () {
//         $scope.sources.push({
//             SourceName:$scope.newSourceName,
//             SourceAttr:$scope.newSourceAttr,
//             SourceType:$scope.newSourceType,
//             SourceAddress:$scope.newSourceAddress,
//             SourceDepart:$scope.newSourceContact,
//             SourceContact:$scope.newSourceContact,
//             SourcePhone:$scope.newSourcePhone,
//             SourceToDepartment:$scope.newSourceToDepartment,
//             SourceCord:$scope.newSourceCord=""
//         });
//     };
//
//     $scope.newSourceName="";
//     $scope.newSourceAttr="";
//     $scope.newSourceType="";
//     $scope.newSourceAddress="";
//     $scope.newSourceDepart="";
//     $scope.newSourceContact="";
//     $scope.newSourcePhone="";
//     $scope.newSourceToDepartment="";
//     $scope.newSourceCord="";
//
//
//     $scope.deleteSource = function ($index) {
//         $scope.sources.splice($index,1)
//     };
// });