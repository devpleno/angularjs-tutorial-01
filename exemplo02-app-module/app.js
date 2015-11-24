var app = angular.module("minhaApp", []);

app.controller("MeuController", ["$scope", function($scope){
	$scope.valor = "Teste";
}]);