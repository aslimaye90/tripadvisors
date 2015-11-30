var app = angular.module("tripadvisors",[]);

app.controller('MainCtrl',['$scope', '$http', function($scope, $http){

    $scope.data = '';
    $scope.search = '';
    $scope.cb2 = false;
    $scope.cb3 = false;

    $scope.$watch('cb2', function(newVal, oldVal){
        if(newVal === true){
            document.getElementById("tbl22").style.visibility = "visible";
            document.getElementById("tbl12").style.visibility = "visible";
        }
        else{
            document.getElementById("tbl22").style.visibility = "hidden";
            document.getElementById("tbl12").style.visibility = "hidden";
        }
    });
    $scope.$watch('cb3', function(newVal, oldVal){
        if(newVal === true){
            document.getElementById("tbl23").style.visibility = "visible";
            document.getElementById("tbl13").style.visibility = "visible";
        }
        else{
            document.getElementById("tbl23").style.visibility = "hidden";
            document.getElementById("tbl13").style.visibility = "hidden";
        }
    });

    $scope.searchThis = function(){
        $scope.getData($scope.search);
    }

    $scope.getData = function(arg){
        $http.get('/' + arg)
        .then(
            function(data){
                //  data is in data.data !?
                $scope.data = data.data;
            },
            function(errData){

            }
        );
    };

    $scope.getData('KansasCityGuy');
}]);