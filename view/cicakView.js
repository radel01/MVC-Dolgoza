import Cica from "./cicaView.js";

export default class Cicak{

    #LISTA=[];
    #szuloELEM;

    constructor(lista, szuloELEM){

        this.#LISTA=lista
        this.#szuloELEM=szuloELEM
        //this.#szuloELEM.empty();
        this.listaKiir()
    }

    listaKiir() {
      this.#LISTA.forEach((elem, index) => {
        new Cica(elem, index, this.#szuloELEM);
      });
    }
}

