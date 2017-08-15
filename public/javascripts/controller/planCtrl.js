/**
 * Created by Jiechen on 2017/7/29.
 */
var myApp = angular.module("myApp");

myApp.controller("planCtrl",planCtrl);
planCtrl.$inject = ["NgTableParams"];
function planCtrl(NgTableParams,$scope) {
    var plans = [
        {PlanName:"飞机冲出跑道总体预案",PlanAttr:"航空器突发事件",PlanType:"航空器跑道事件",PlanDepart:"应急办",PlanLevel:"公司级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/25",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
        {PlanName:"波音307航空器事故预案",PlanAttr:"航空器突发事件",PlanType:"波音307故障",PlanDepart:"医疗救援中心",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.2",PlanDate:"2011/03/04",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
        {PlanName:"抗击台风事故预案",PlanAttr:"非航空器突发事件",PlanType:"自然灾害",PlanDepart:"消防护卫部",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.2",PlanDate:"2014/09/12",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
        {PlanName:"1",PlanAttr:"非航空器突发事件",PlanType:"自然灾害",PlanDepart:"消防护卫部",PlanLevel:"公司级",PlanVersion:"V1.0-1.1.1",PlanDate:"2015/08/24",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
        {PlanName:"2",PlanAttr:"航空器突发事件",PlanType:"波音307故障",PlanDepart:"消防护卫部",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.3",PlanDate:"2017/09/25",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
        {PlanName:"3",PlanAttr:"非航空器突发事件",PlanType:"航空器跑道事件",PlanDepart:"消防护卫部",PlanLevel:"公司级",PlanVersion:"V1.0-1.1.5",PlanDate:"2017/06/07",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
        {PlanName:"4",PlanAttr:"航空器突发事件",PlanType:"自然灾害",PlanDepart:"消防护卫部",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/31",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
        {PlanName:"5",PlanAttr:"航空器突发事件",PlanType:"冲偏出跑道",PlanDepart:"消防护卫部",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.4",PlanDate:"2016/05/01",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
        {PlanName:"6",PlanAttr:"航空器突发事件",PlanType:"飞机失火",PlanDepart:"消防护卫部",PlanLevel:"公司级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/13",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
        {PlanName:"7",PlanAttr:"非航空器突发事件",PlanType:"机场暴动",PlanDepart:"消防护卫部",PlanLevel:"公司级",PlanVersion:"V1.0-1.1.6",PlanDate:"2017/05/11",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
        {PlanName:"8",PlanAttr:"航空器突发事件",PlanType:"机场关闭",PlanDepart:"消防护卫部",PlanLevel:"公司级",PlanVersion:"V1.0-1.1.6",PlanDate:"2017/05/11",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"}
];
    var level = ["航空器突发事件","非航空器突发事件"];
    var plan11 = this;
    var originalData = angular.copy(plans);
    plan11.tableParams = new NgTableParams(
        {
            count:5
        },{
            filterDelay: 0,
            counts:[5,10,20],
            total:plans.length,
            dataset:angular.copy(plans)
        });

    plan11.newinput = false;
    // plan11.statereverse = statereverse;
    function statereverse() {
        plan11.newinput = !plan11.newinput;
        console.log(plan11.newinput)
    }


    plan11.cancel = cancel;
    plan11.del = del;
    plan11.save = save;
    plan11.level = level;

    plan11.getLevel = getLevel;
    
    function getLevel() {
        return level;
    }

    function cancel(row, rowForm) {
        var originalRow = resetRow(row, rowForm);
        angular.extend(row, originalRow);
    }

    function del(row) {
        _.remove(plan11.tableParams.settings().dataset, function(item) {
            return row === item;
        });
        plan11.tableParams.reload().then(function(data) {
            if (data.length === 0 && plan11.tableParams.total() > 0) {
                plan11.tableParams.page(plan11.tableParams.page() -1);
                plan11.tableParams.reload();
            }
        });
    }

    function resetRow(row, rowForm){
        row.isEditing = false;
        rowForm.$setPristine();
        plan11.tableTracker.untrack(row);
        return _.findWhere(originalData, function(r){
            return r.id === row.id;
        });
    }

    function save(row, rowForm) {
        var originalRow = resetRow(row, rowForm);
        angular.extend(originalRow, row);
    }

    plan11.helloworld = "朱杰辰123";
    console.log(plan11.helloworld);


//以下为模态框内容
//     plan11.animationsEnabled = true;
//     plan11.open = function (size) {
//         var modalInstance = $uibModal.open({
//             animation: plan11.animationsEnabled,
//             ariaLabelledBy: 'modal-title',
//             ariaDescribedBy: 'modal-body',
//             templateUrl: 'myModalContent.html',
//             controller: 'ModalInstanceCtrl',
//             controllerAs: 'plan11',
//             size: size,
//             backdrop:"static",
//             appendTo: parentElem,
//             resolve: {
//                 items: function () {
//                     return plan11.plans;
//                 }
//             }
//         });
//         modalInstance.result.then(function (selectedItem) {
//             $scope.selected = selectedItem;
//         }, function () {
//             $log.info('Modal dismissed at: ' + new Date());
//         });
//
//
//         plan11.toggleAnimation = toggleAnimation;
//         function toggleAnimation() {
//             plan11.animationsEnabled = !plan11.animationsEnabled;
//         }
//     }

}



// myApp.controller("planCtrl",function ($scope) {
//     $scope.newPlan =function () {
//         $scope.data.push({PlanName:$scope.newPlanName, PlanAttr: $scope.newPlanAttr,PlanType: $scope.newPlanType1,PlanDepart: $scope.newPlanDepart1,
//             PlanLevel:$scope.newPlanLevel, PlanVersion:$scope.newPlanVersion, PlanDate:$scope.newPlanDate1,  PlanDescription:$scope.newPlanDescription
//         });
//     };
//     $scope.newPlanName ="";
//     $scope.newPlanAttr ="";
//     $scope.newPlanType1 ="";
//     $scope.newPlanDepart1 ="";
//     $scope.newPlanLevel="";
//     $scope.newPlanVersion="";
//     $scope.newPlanDate1="";
//     $scope.newPlanDescription="";
//
//     $scope.deletePlan = function ($index) {
//         $scope.plans.splice($index,1);
//     };
// });

// myApp.controller("planCtrl",["$scope","NgTableParams","$uibModal","$log",function ($scope,NgTableParams,$uibModal,$log) {
//     console.log("这是预案与处置程序控制器");
//
//     $scope.data = [
//         {PlanName:"飞机冲出跑道总体预案",PlanAttr:"航空器突发事件",PlanType:"航空器跑道事件",PlanDepart:"应急办",PlanLevel:"公司级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/25",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
//         {PlanName:"波音307航空器事故预案",PlanAttr:"航空器突发事件",PlanType:"波音307故障",PlanDepart:"医疗救援中心",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/25",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
//         {PlanName:"抗击台风事故预案",PlanAttr:"非航空器突发事件",PlanType:"自然灾害",PlanDepart:"消防护卫部",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/25",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
//         {PlanName:"抗击台风事故预案",PlanAttr:"非航空器突发事件",PlanType:"自然灾害",PlanDepart:"消防护卫部",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/25",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
//         {PlanName:"抗击台风事故预案",PlanAttr:"非航空器突发事件",PlanType:"自然灾害",PlanDepart:"消防护卫部",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/25",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
//         {PlanName:"抗击台风事故预案",PlanAttr:"非航空器突发事件",PlanType:"自然灾害",PlanDepart:"消防护卫部",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/25",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
//         {PlanName:"抗击台风事故预案",PlanAttr:"非航空器突发事件",PlanType:"自然灾害",PlanDepart:"消防护卫部",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/25",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
//         {PlanName:"抗击台风事故预案",PlanAttr:"非航空器突发事件",PlanType:"自然灾害",PlanDepart:"消防护卫部",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/25",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
//         {PlanName:"抗击台风事故预案",PlanAttr:"非航空器突发事件",PlanType:"自然灾害",PlanDepart:"消防护卫部",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/25",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"},
//         {PlanName:"抗击台风事故预案",PlanAttr:"非航空器突发事件",PlanType:"自然灾害",PlanDepart:"消防护卫部",PlanLevel:"部门级",PlanVersion:"V1.0-1.1.2",PlanDate:"2017/05/25",PlanDescription:"总体预案在发生事故时，紧急查阅的，便于快速做出决策。"}
//     ];
//

//

//
//     $scope.self = this;
//     $scope.self.tableParams = new NgTableParams({count:5},{count:[5,10,20],paginationMaxBlocks: 13,paginationMinBlocks: 2,dataset:$scope.data});
//
//
// }]);

