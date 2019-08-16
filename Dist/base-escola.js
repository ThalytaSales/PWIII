"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
    }
    Aluno.prototype.exibir = function () {
        console.log("Nome" + this.nome);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
exports.Alu = Aluno;
