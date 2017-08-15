/**
 * Created by Jiechen on 2017/7/28.
 */
var myApp = angular.module("myApp");

myApp.controller("LineChartController",function ($scope) {
   console.log("this is LineChartController");
   $scope.myChart = echarts.init(document.getElementById("main"));
    $scope.option1 ={
        // title:{
        //     text:'预案与处置程序'
        // },
        tooltip:{},
        legend:{
            data:['数量']
        },
        xAxis:{
            data:["应急办","消防护卫部","医疗救援部","华南蓝天油料","空港实业","运控中心"]
        },
        yAxis:{},
        series:[{
            name:"数量",
            type:"bar",
            data:[5,20,36,10,10,20]
        }]
    };
    $scope.myChart.setOption($scope.option1);



    $scope.myChart2 = echarts.init(document.getElementById("main2"));
    $scope.option2 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['非航空器事件','航空器事件']
        },
        series: [
            {
                name:'事件类型',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:45, name:'非航空器事件'},
                    {value:55, name:'航空器事件'}
                ]
            }
        ]
    };
    $scope.myChart2.setOption($scope.option2);


    $scope.myChart3 = echarts.init(document.getElementById("main3"));
    $scope.option3 = {

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['加油站','油库','仓库','塔台','其他']
        },
        series: [
            {
                name:'类型',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:25, name:'加油站'},
                    {value:30, name:'油库'},
                    {value:25, name:'仓库'},
                    {value:10, name:'塔台'},
                    {value:10, name:'其他'}
                ]
            }
        ]
    };
    $scope.myChart3.setOption($scope.option3);

    $scope.myChart4 = echarts.init(document.getElementById("main4"));
    $scope.option4 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['重大设施','危险源',"重大设施且危险源"]
        },
        series: [
            {
                name:'分类',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:35, name:'重大设施'},
                    {value:57, name:'危险源'},
                    {value:8, name:'重大设施且危险源'}
                ]
            }
        ]
    };
    $scope.myChart4.setOption($scope.option4);

    $scope.myChart5 = echarts.init(document.getElementById("main5"));
    $scope.option5 ={
        // title:{
        //     text:'预案与处置程序'
        // },
        tooltip:{},
        legend:{
            data:['数量']
        },
        xAxis:{
            data:["应急办","消防护卫部","医疗救援部","华南蓝天油料","空港实业","运控中心"]
        },
        yAxis:{},
        series:[{
            name:"数量",
            type:"bar",
            data:[4,3,1,2,3,2]
        }]
    };
    $scope.myChart5.setOption($scope.option5);

});