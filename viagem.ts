export class Viagem {

    constructor(public tempoGasto : number, public velocidadeMedia : number , public redimentoVeiculo : number){}

    obterDistancia() {
        let distancia1 = this.tempoGasto * this.velocidadeMedia
        return distancia1
    }
 obterConsumo()    {
     return this.obterDistancia () / this.redimentoVeiculo
 }

}