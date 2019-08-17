"use strict";
exports.__esModule = true;
var Viagem = /** @class */ (function () {
    function Viagem(tempoGasto, velocidadeMedia, redimentoVeiculo) {
        this.tempoGasto = tempoGasto;
        this.velocidadeMedia = velocidadeMedia;
        this.redimentoVeiculo = redimentoVeiculo;
    }
    Viagem.prototype.obterDistancia = function () {
        var distancia1 = this.tempoGasto * this.velocidadeMedia;
        return distancia1;
    };
    Viagem.prototype.obterConsumo = function () {
        return this.obterDistancia() / this.redimentoVeiculo;
    };
    return Viagem;
}());
exports.Viagem = Viagem;
