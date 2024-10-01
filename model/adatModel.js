/* Modell: 5 pont

Adatok beolvasása és tárolása listában.
Lista lekérdezése (getter)
Lista adatainak módosítása a törlékor (torol(id) */

import { adatLista } from "../adat.js";

export default class adatModel{
    #LISTA=[];

    constructor(){
        this.#LISTA=adatLista
    }


    getList(){
        return this.#LISTA;
    }

    torol(id){
        
        return this.#LISTA.splice(id,1)
    }

}