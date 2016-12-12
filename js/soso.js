/**
 * Created by yu on 2016/11/27.
 */

var app = angular.module('myApp',[]);
app.controller('show',['$scope','$http',function($scope,$http){
    $scope.arr=[];
    $scope.change = function(data){

        $http({
            "method":"jsonp",
            "url":"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$scope.data+"&cb=JSON_CALLBACK"

        }).success(function(res){
            $scope.arr=res.s;
        })
    }
}]);
