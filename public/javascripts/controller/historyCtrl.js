/**
 * Created by Jiechen on 2017/7/29.
 */
var myApp = angular.module("myApp");

myApp.controller("historyCtrl",historyCtrl);
historyCtrl.$inject = ["NgTableParams"];
function historyCtrl(NgTableParams) {
    var histories = [
        {HistoryName:"飞机冲出跑道综合处置报告",HistoryType:"航空器突发事件-涉及航空器的其他突发事件",HistoryDepart:"应急办",HistoryLevel:"综合",HistoryDate:"2017/05/25"},
        {HistoryName:"****突发事件总结报告",HistoryType:"航空器突发事件-涉及航空器的其他突发事件",HistoryDepart:"医疗救援中心",HistoryLevel:"部门",HistoryDate:"2017/05/25"}
    ];

    var history11 = this;
    var originalData = angular.copy(histories);
    history11.tableParams = new NgTableParams(
        {
            count:5
        },{
            filterDelay: 0,
            counts:[5,10,20],
            total:histories.length,
            dataset:angular.copy(histories)
        });

    history11.cancel = cancel;
    history11.del = del;
    history11.save = save;
    // history11.level = level;

    // history11.getLevel = getLevel;
    //
    // function getLevel() {
    //    return level;
    // }

    function cancel(row, rowForm) {
        var originalRow = resetRow(row, rowForm);
        angular.extend(row, originalRow);
    }

    function del(row) {
        _.remove(history11.tableParams.settings().dataset, function(item) {
            return row === item;
        });
        history11.tableParams.reload().then(function(data) {
            if (data.length === 0 && history11.tableParams.total() > 0) {
                history11.tableParams.page(history11.tableParams.page() -1);
                history11.tableParams.reload();
            }
        });
    }

    function resetRow(row, rowForm){
        row.isEditing = false;
        rowForm.$setPristine();
        history11.tableTracker.untrack(row);
        return _.findWhere(originalData, function(r){
            return r.id === row.id;
        });
    }

    function save(row, rowForm) {
        var originalRow = resetRow(row, rowForm);
        angular.extend(originalRow, row);
    }

}

// myApp.controller("historyCtrl",function ($scope) {
//     console.log("这是案例库管理控制器");
//     $scope.histories = [
//         {HistoryName:"飞机冲出跑道综合处置报告",HistoryType:"航空器突发事件-涉及航空器的其他突发事件",HistoryDepart:"应急办",HistoryLevel:"综合",HistoryDate:"2017/05/25"},
//         {HistoryName:"****突发事件总结报告",HistoryType:"航空器突发事件-涉及航空器的其他突发事件",HistoryDepart:"医疗救援中心",HistoryLevel:"部门",HistoryDate:"2017/05/25"}
//     ];
//
//     $scope.newHistoryName = "";
//     $scope.newHistoryType = "";
//     $scope.newHistoryDepart = "";
//     $scope.newHistoryLevel = "";
//     $scope.newHistoryDate = "";
//
//     $scope.newHistory = function () {
//         $scope.histories.push({HistoryName:$scope.newHistoryName,HistoryType:$scope.newHistoryType,HistoryDepart:$scope.newHistoryDepart,HistoryLevel:$scope.newHistoryLevel,HistoryDate:newHistoryDate })
//     };
//
//     $scope.deleteHistory = function ($index) {
//         $scope.histories.splice($index,1);
//     };
// });