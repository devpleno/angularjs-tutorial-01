var app = angular.module("minhaApp", []);

app.controller("MeuController", [function(){
	this.contador = 0;
	this.contar = function(){
		this.contador++;
	}
	this.zerar = function(){
		this.contador = 0;
	}
}]);