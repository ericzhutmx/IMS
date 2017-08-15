/**
 * Created by Jiechen on 2017/7/20.
 */
'use strict';

var myApp = angular.module('myApp',[
   'ui.router',
    'ngTable',
    'ngAnimate',
    'angularFileUpload'
    // 'ui.bootstrap'
    // 'ngBaiduMap'
]);
myApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login',{
            url:"/login",
            templateUrl:"views/login.html",
            controller:"loginCtrl"
        })

        .state('daily',{
            url:"/daily",
            templateUrl:"views/daily.html"
        })

        .state('daily.plans',{
            url:"/plan",
            templateUrl:"views/daily-plan.html",
            controller:"planCtrl"
        })

        .state("daily.dangerSource",{
            url:"/dangerSource",
            templateUrl:"daily-dangersource.html",
            controller:"dangerCtrl"
        })

        .state("daily.device",{
            url:"/device",
            templateUrl:"daily-device.html",
            controller:"deviceCtrl"
        })

        .state("daily.expert",{
            url:"/expert",
            templateUrl:"daily-expert.html",
            controller:"expertCtrl"
        })

        .state("daily.history",{
            url:"/history",
            templateUrl:"daily-history.html",
            controller:"historyCtrl"
        })

        .state("daily.hr",{
            url:"/hr",
            templateUrl:"daily-hr.html",
            controller:"hrCtrl"
        })

        .state('daily.training',{
            url:"/training",
            templateUrl:"daily-training.html",
            controller:"trainingCtrl"

        })
        .state('daily.basic',{
            url:"/basicInfo",
            templateUrl:"daily-basic.html",
            controller:"basicCtrl"
        })

        .state("daily.basic.govern",{
            url:"/govern",
            templateUrl:"daily-basic-government.html",
            controller:"governCtrl"
        })

        .state("daily.basic.communication",{
            url:"/govern",
            templateUrl:"daily-basic-communication.html",
            controller:"communicationCtrl"
        })

        .state("daily.basic.hospital",{
            url:"/govern",
            templateUrl:"daily-basic-hospital.html",
            controller:"hospitalCtrl"
        })

        .state("daily.basic.shelter",{
            url:"/govern",
            templateUrl:"daily-basic-shelter.html",
            controller:"shelterCtrl"
        })

        .state("daily.team",{
            url:"/team",
            templateUrl:"daily-team.html",
            controller:"teamCtrl"
        })

        .state("daily.test",{
            url:"/test",
            templateUrl:"daily-test.html",
            controller:"testCtrl"
        })

        .state('config',{
            url:"/config",
            templateUrl:"config.html"
        })
        .state('config.plan',{
            url:"/planType",
            templateUrl:"config-plans.html",
            controller: "planTypeCtrl"
        })

        .state('config.device',{
            url:"/deviceType",
            templateUrl:"config-device.html"
        })

        .state('config.facility',{
            url:"/facilityType",
            templateUrl:"config-facility.html",
            controller:"facilityTypeCtrl"
        })

        .state('report',{
            url:"/report",
            templateUrl:"report.html",
            controller:"reportCtrl"
        })

        .state('user',{
            url:"/user",
            templateUrl:"user.html",
            controller:"userCtrl"
        })

        .state("gis",{
            url:"/gis",
            templateUrl:"GIS.html"
        })

        .state("gis.element",{
            url:"/element",
            templateUrl:"gis-element.html",
            controller:"elementCtrl"
        })

        .state("gis.distance",{
            url:"/distance",
            templateUrl:"gis-distance.html",
            controller:"distanceCtrl"
        })

        .state("gis.draw",{
            url:"/draw",
            templateUrl:"gis-draw.html",
            controller:"drawCtrl"
        })

        .state("gis.traffic",{
            url:"/traffic",
            templateUrl:"gis-traffic.html",
            controller:"trafficCtrl"
        })

        .state("gis.analysis",{
            url:"/analysis",
            templateUrl:"gis-rangeAnalasis.html",
            controller:"rangeAnaCtrl"
        })

        .state("system",{
            url:"/system",
            templateUrl:"system.html"
        })

        .state("system.department",{
            url:"/department",
            templateUrl:"system-department.html",
            controller:"departmentCtrl"
    })

        .state("system.user",{
           url:"/systemUser",
            templateUrl:"system-user.html",
            controller:"userconfigCtrl"
        })

        .state("statistic",{
            url:"/statistic",
            templateUrl:"statistic.html",
            controller:"LineChartController"
        })

        .state("emer",{
           url:"/emergency",
           templateUrl:"emer.html",
           controller:"emerCtrl"
        })

        .state("emer.plans",{
            url:"emerPlan",
            templateUrl:"emer-plan.html",
            controller:"emerPlanCtrl"
        })

        .state("emer.map",{
            url:"/emerMap",
            templateUrl:"emer-map.html"
        })

        .state("emer.map.distances",{
            url:"/emerMap",
            templateUrl:"gis-distance.html",
            contrller:"distanceCtrl"
        })

        .state("emer.map.range",{
            url:"/emerMap",
            templateUrl:"gis-rangeAnalasis.html",
            controller:"rangeAnaCtrl"
        })

        .state("emer.map.traffics",{
            url:"/emerMap",
            templateUrl:"gis-traffic.html",
            controller:"trafficCtrl"
        })

        .state("emer.hr",{
            url:"/emerHr",
            templateUrl:"daily-hr.html",
            controller:"hrCtrl"
        })

        .state("emer.expert",{
            url:"/emerExpert",
            templateUrl:"daily-expert.html",
            controller:"expertCtrl"
        })

        .state("emer.team",{
            url:"/emerTeam",
            templateUrl:"daily-team.html",
            controller:"teamCtrl"
        })

        .state("emer.car",{
            url:"/emerCar",
            templateUrl:"emer-car.html"
        });
}]);

