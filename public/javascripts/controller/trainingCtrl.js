/**
 * Created by Jiechen on 2017/7/29.
 */
var myApp = angular.module("myApp");
myApp.controller("trainingCtrl",trainingCtrl);
trainingCtrl.$inject = ["NgTableParams"];
function trainingCtrl(NgTableParams) {
    var trainings = [
        {TrainingName:"一年一度消防演练计划",TrainingDepart:"消防护卫部",TrainingType:"演练计划",TrainingDate:"2017/05/10",TrainingState:"已完成"},
        {TrainingName:"安全意识培训计划",TrainingDepart:"消防护卫部",TrainingType:"培训计划",TrainingDate:"2017/09/10",TrainingState:"未完成"}
    ];
    var train11 = this;
    var originalData = angular.copy(trainings);
    train11.tableParams = new NgTableParams(
        {
            count:5
        },{
            filterDelay: 0,
            counts:[5,10,20],
            total:trainings.length,
            dataset:angular.copy(trainings)
        });

    train11.cancel = cancel;
    train11.del = del;
    train11.save = save;
    // train11.level = level;

    // train11.getLevel = getLevel;
    //
    // function getLevel() {
    //    return level;
    // }

    function cancel(row, rowForm) {
        var originalRow = resetRow(row, rowForm);
        angular.extend(row, originalRow);
    }

    function del(row) {
        _.remove(train11.tableParams.settings().dataset, function(item) {
            return row === item;
        });
        train11.tableParams.reload().then(function(data) {
            if (data.length === 0 && train11.tableParams.total() > 0) {
                train11.tableParams.page(train11.tableParams.page() -1);
                train11.tableParams.reload();
            }
        });
    }

    function resetRow(row, rowForm){
        row.isEditing = false;
        rowForm.$setPristine();
        train11.tableTracker.untrack(row);
        return _.findWhere(originalData, function(r){
            return r.id === row.id;
        });
    }

    function save(row, rowForm) {
        var originalRow = resetRow(row, rowForm);
        angular.extend(originalRow, row);
    }
}
//
// myApp.controller("trainingCtrl",function ($scope) {
//     console.log("这里是培训与演练管理控制器");
//     $scope.trainings = [
//         {TrainingName:"一年一度消防演练计划",TrainingDepart:"消防护卫部",TrainingType:"演练计划",TrainingDate:"2017/05/10",TrainingState:"已完成"},
//         {TrainingName:"安全意识培训计划",TrainingDepart:"消防护卫部",TrainingType:"培训计划",TrainingDate:"2017/09/10",TrainingState:"未完成"}
//     ];
//
//     $scope.newTrainingName = "";
//     $scope.newTrainingDepart = "";
//     $scope.newTrainingType = "";
//     $scope.newTrainingDate = "";
//     $scope.newTrainingState = "";
//
//     $scope.newTraining = function () {
//         $scope.trainings.push({ TrainingName:$scope.newTrainingName,TrainingDepart:$scope.newTrainingDepart,TrainingType:$scope.newTrainingType,TrainingDate:$scope.newTrainingDate,TrainingState:$scope.newTrainingState})
//     };
//
//     $scope.deleteTraining = function ($index) {
//         $scope.trainings.splice($index,1);
//     };
// });