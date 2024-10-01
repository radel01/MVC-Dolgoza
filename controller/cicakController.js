/* Controller: 6 pont

Modell példányosítása
Modell gettereinek hívása a listák beállításához
View példányosítása
Feliratkozás a View eseménykezelőjére
A modell megfelelő metódusának hívása a rekord törléséhez.
Modellből lekérni a módosult adatokat.  */

import adatModel from "../model/adatModel.js";
import Cicak from "../view/cicakView.js";

export default class cicaController{

    constructor(){
        this.taroloELEM=$(".tartalom");
        this.model= new adatModel();
        this.#esemenyKezelo();
        new Cicak(this.model.getList(), this.taroloELEM);
        

    }


    #esemenyKezelo(){
        $(window).on("katt",(event)=>{
            console.log("gomb")
            console.log(event.detail)
            this.model.torol(event.detail)
        })
    }

}