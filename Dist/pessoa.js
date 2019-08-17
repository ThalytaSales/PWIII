"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa(altura, peso) {
        this.altura = altura;
        this.peso = peso;
    }
    Pessoa.prototype.imc = function () {
        return this.peso / (this.altura * this.altura);
    };
    Pessoa.prototype.classificacao = function () {
        if (this.imc() < 18.5) {
            return " Abaixo do peso ";
        }
        else if (this.imc() <= 24.9) {
            return " Peso  normal ";
        }
        else if (this.imc() <= 29, 9) {
            return " Pré- Obesidade ";
        }
        else if (this.imc() <= 34, 9) {
            return " Obesidade Grau I ";
        }
        else if (this.imc() <= 39, 9) {
            return " Obesidade Grau II ";
        }
        else {
            return " Obesidade Grau III ";
        }
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
