var app = angular.module("minhaApp", []);

app.controller("MeuController", ["$scope", function($scope){
	$scope.contador = 0;
	$scope.contar = function(){
		$scope.contador++;
	}
	$scope.zerar = function(){
		$scope.contador = 0;
	}
}]);