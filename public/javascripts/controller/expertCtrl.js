/**
 * Created by Jiechen on 2017/7/29.
 */
var myApp = angular.module("myApp");

myApp.controller("expertCtrl",expertCtrl);
expertCtrl.$inject = ["NgTableParams"];
function expertCtrl(NgTableParams) {
    var experts = [
        {ExpertName:"李兰",ExpertDepart:"湖南石油储运公司",ExpertField:"消防指挥",ExpertTitle:"高级工程师",ExpertToDepart:"华南蓝天油料",ExpertPhone:"19384764848"},
        {ExpertName:"王五",ExpertDepart:"湖南天正设计工程有限公司",ExpertField:"危险品处置",ExpertTitle:"高级工程师",ExpertToDepart:"消防护卫部",ExpertPhone:"18672638912"}
    ];

    var expert11 = this;
    var originalData = angular.copy(experts);
    expert11.tableParams = new NgTableParams(
        {
            count:5
        },{
            filterDelay: 0,
            counts:[5,10,20],
            total:experts.length,
            dataset:angular.copy(experts)
        });

    expert11.cancel = cancel;
    expert11.del = del;
    expert11.save = save;
    // expert11.level = level;

    // expert11.getLevel = getLevel;
    //
    // function getLevel() {
    //    return level;
    // }

    function cancel(row, rowForm) {
        var originalRow = resetRow(row, rowForm);
        angular.extend(row, originalRow);
    }

    function del(row) {
        _.remove(expert11.tableParams.settings().dataset, function(item) {
            return row === item;
        });
        expert11.tableParams.reload().then(function(data) {
            if (data.length === 0 && expert11.tableParams.total() > 0) {
                expert11.tableParams.page(expert11.tableParams.page() -1);
                expert11.tableParams.reload();
            }
        });
    }

    function resetRow(row, rowForm){
        row.isEditing = false;
        rowForm.$setPristine();
        expert11.tableTracker.untrack(row);
        return _.findWhere(originalData, function(r){
            return r.id === row.id;
        });
    }

    function save(row, rowForm) {
        var originalRow = resetRow(row, rowForm);
        angular.extend(originalRow, row);
    }
}


// myApp.controller("expertCtrl",["NgTableParams","$scope",function ($scope,NgTableParams) {
//     console.log("这是应急专家控制器");
//     $scope.experts = [
//         {ExpertName:"李兰",ExpertDepart:"湖南石油储运公司",ExpertField:"消防指挥",ExpertTitle:"高级工程师",ExpertToDepart:"华南蓝天油料",ExpertPhone:"19384764848"},
//         {ExpertName:"王五",ExpertDepart:"湖南天正设计工程有限公司",ExpertField:"危险品处置",ExpertTitle:"高级工程师",ExpertToDepart:"消防护卫部",ExpertPhone:"18672638912"}
//     ];
//
//     $scope.newExpertName ="";
//     $scope.newExpertDepart ="";
//     $scope.newExpertField ="";
//     $scope.newExpertTitle ="";
//     $scope.newExpertToDepart ="";
//     $scope.newExpertPhone ="";
//
//     $scope.newExpert = function () {
//         $scope.experts.push({ ExpertName:$scope.newExpertName,ExpertDepart:$scope.newExpertDepart,ExpertField:$scope.newExpertField,ExpertTitle:$scope.newExpertTitle,ExpertToDepart:$scope.newExpertToDepart,ExpertPhone:$scope.newExpertPhone})
//     };
//
//     $scope.deleteExpert = function ($index) {
//         $scope.experts.splice($index,1);
//     };
// }]);