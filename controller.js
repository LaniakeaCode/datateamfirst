var myApp = angular.module('myApp',[]);

myApp.controller('myAppController',myAppController);

myAppController.$inject = [$http,$scope];

myApp.controller('myAppController', function($scope,$http){
    $scope.getItem = function () {
        $http.get("/items").then(function (res){
            console.log(res);
            $scope.items = res.data.items;
        })
    }
    $scope.getItem();

    $scope.addItem = function () {
        $http.post("/items",$scope.item).then(function (res) {
            console.log(res);
            $scope.getItem();
        })
    }

    $scope.updateItem = function(item) { 
        $http.put('/items/'+ item.id,$scope.item).then( (res) => {
           console.log(res);
           $scope.getItem();
        })
    }
   
    $scope.removeItem = function(item){
        $http.delete('/items/'+ item.id).then(function (res){
           console.log(res);
           $scope.getItem();
        })
    }
    
})
