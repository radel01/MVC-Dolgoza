import Cica from "./cicaView.js";

export default class Cicak{

    #LISTA=[];
    #szuloELEM;

    constructor(lista, szuloELEM){

        this.#LISTA=lista
        this.#szuloELEM=szuloELEM
        this.listaKiir()
    }

    listaKiir() {
      this.#LISTA.forEach((elem, index) => {
        new Cica(elem, index, this.#szuloELEM);
      });
    }
}

