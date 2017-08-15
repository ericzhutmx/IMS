/**
 * Created by Jiechen on 2017/7/29.
 */
var myApp = angular.module("myApp");

myApp.controller("deviceCtrl",deviceCtrl);
deviceCtrl.$inject = ["NgTableParams"];
function deviceCtrl(NgTableParams) {
   var devices = [
      { DeviceName:"主力泡沫车",DeviceNumber:"湘A504",DeviceType1:"消防车辆",DeviceDepart:"消防护卫部",DeviceSpec:"美洲豹（卢森堡亚）",DeviceAmount:"1辆",DeviceExpireDate:"2020/01/01",DeviceAbradability:"高" },
      { DeviceName:"防化服",DeviceNumber:"YJ-XIAOFANG-020",DeviceType1:"其他",DeviceDepart:"医疗救援中心",DeviceSpec:"",DeviceAmount:"2件",DeviceExpireDate:"2019/03/01",DeviceAbradability:"低" }
   ];
   var device11 = this;
   var originalData = angular.copy(devices);
   device11.tableParams = new NgTableParams(
       {
          count:5
       },{
          filterDelay: 0,
          counts:[5,10,20],
          total:devices.length,
          dataset:angular.copy(devices)
       });

   device11.cancel = cancel;
   device11.del = del;
   device11.save = save;
   // device11.level = level;

   // device11.getLevel = getLevel;
   //
   // function getLevel() {
   //    return level;
   // }

   function cancel(row, rowForm) {
      var originalRow = resetRow(row, rowForm);
      angular.extend(row, originalRow);
   }

   function del(row) {
      _.remove(device11.tableParams.settings().dataset, function(item) {
         return row === item;
      });
      device11.tableParams.reload().then(function(data) {
         if (data.length === 0 && device11.tableParams.total() > 0) {
            device11.tableParams.page(device11.tableParams.page() -1);
            device11.tableParams.reload();
         }
      });
   }

   function resetRow(row, rowForm){
      row.isEditing = false;
      rowForm.$setPristine();
      device11.tableTracker.untrack(row);
      return _.findWhere(originalData, function(r){
         return r.id === row.id;
      });
   }

   function save(row, rowForm) {
      var originalRow = resetRow(row, rowForm);
      angular.extend(originalRow, row);
   }
}



// myApp.controller("deviceCtrl",function ($scope) {
//    console.log("这是应急设备控制器");
//    $scope.devices = [
//        { DeviceName:"主力泡沫车",DeviceNumber:"湘A504",DeviceType1:"消防车辆",DeviceDepart:"消防护卫部",DeviceSpec:"美洲豹（卢森堡亚）",DeviceAmount:"1辆",DeviceExpireDate:"2020/01/01",DeviceAbradability:"高" },
//        { DeviceName:"防化服",DeviceNumber:"YJ-XIAOFANG-020",DeviceType1:"其他",DeviceDepart:"医疗救援中心",DeviceSpec:"",DeviceAmount:"2件",DeviceExpireDate:"2019/03/01",DeviceAbradability:"低" }
//        ];
//
//
//
//    $scope.newDevice = function () {
//       $scope.devices.push({
//          DeviceName:$scope.newDeviceName,DeviceNumber:$scope.newDeviceNumber,DeviceType:$scope.newDeviceType1,DeviceDepart:$scope.newDeviceDepart,DeviceSpec:$scope.newDeviceSpec,DeviceAmount:$scope.newDeviceAmount,DeviceExpireDate:$scope.newDeviceExpireDate,DeviceAbradability:$scope.newDeviceAbradability
//       });
//    };
//
//    $scope.newDeviceName ="";
//    $scope.newDeviceNumber ="";
//    $scope.newDeviceType1 ="";
//    $scope.newDeviceDepart ="";
//    $scope.newDeviceSpec ="";
//    $scope.newDeviceAmount ="";
//    $scope.newDeviceExpireDate ="";
//    $scope.newDeviceAbradability ="";
//
//    $scope.deleteDevice = function ($index) {
//       $scope.devices.splice($index,1);
//    };
// });