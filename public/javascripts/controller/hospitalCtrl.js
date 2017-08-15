/**
 * Created by Jiechen on 2017/7/31.
 */
var myApp = angular.module("myApp");

myApp.controller("hospitalCtrl",function ($scope) {
    console.log("这里是医疗卫生控制器");
    $scope.hospitals = [
        {HospitalSpot:"第一医疗救援点", HospitalName:"长沙市急救中心", HospitalSpotDescirp:"床位30张，简单外科手术", HospitalAddress:"长沙市岳麓区金星北路一段517号",HospitalCord:"是"},
        {HospitalSpot:"第二医疗救援点", HospitalName:"岳麓区人民医院", HospitalSpotDescirp:"床位150张，普通外科手术", HospitalAddress:"长沙市岳麓区真有路32号",HospitalCord:"否"},
        {HospitalSpot:"第三医疗救援点", HospitalName:"长沙县中心医院",HospitalSpotDescirp:"床位90张，脑外科、骨外科手术", HospitalAddress:"长沙市星沙镇开元路39号", HospitalCord:"否"},
        {HospitalSpot:"第四医疗救援点", HospitalName:"黄花镇中心卫生院",HospitalSpotDescirp:"床位20张，外科手术", HospitalAddress:"长沙市长沙县黄花镇黄回路158号", HospitalCord:"是"},
        {HospitalSpot:"第五医疗救援点", HospitalName:"长沙市308医院",HospitalSpotDescirp:"此医院已超出区域范围", HospitalAddress:"长沙市有源路8号", HospitalCord:"否"}
    ];

    $scope.newHospitalSpot = "";
    $scope.newHospitalName = "";
    $scope.newHospitalSpotDescirp = "";
    $scope.newHospitalAddress = "";
    $scope.newHospitalCord = "";

    $scope.newHospital = function () {
        $scope.governs.push({HospitalSpot:$scope.newHospitalSpot,HospitalName:$scope.newHospitalName,HospitalSpotDescirp:$scope.newHospitalSpotDescirp,HospitalAddress:$scope.newHospitalAddress,HospitalCord:newHospitalCord})
    };

    $scope.deleteHospital = function ($index) {
        $scope.hospitals.splice($index,1);
    };
});