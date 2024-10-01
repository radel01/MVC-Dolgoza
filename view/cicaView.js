/* View:  8 pont

Az adatok megjelenítése  li és span, button elemek 
Saját adattagok létrehozása
Az egyes elemek megfogása
Eseménykezelő hozzárendelése a gombhoz. 
Saját esemény létrehozása */

/* Feladat, hogy jelenítsd meg az oldalon az adatokat listában egymás alatt !

Minden rekordhoz (soronként) legyen egy gomb a sor elején, amire kattintva a terméket töröljük a listából. */

export default class Cica{
    #cicaAdat=[];
    #szuloELEM;
    #index;


    constructor(adat, index, szuloELEM){
        this.#index=index
        this.#cicaAdat=adat;
        this.#szuloELEM=szuloELEM;

        this.cicaKiir();
        this.gombELEM=$(".kiv:last");
        this.gombKattint();
    }

    cicaKiir() {
        this.#szuloELEM.append(
          `
          <li class="sor">
          <button type="button" class="kiv btn btn-dark" >Törlés</button
            <span>${this.#cicaAdat.Id}, </span>
            <span>${this.#cicaAdat.db}, </span>
            <span>${this.#cicaAdat.nev}, </span>
            <span>${this.#cicaAdat.kor}, </span>
            <span>${this.#cicaAdat.nem}</span>
          </li>

        `
        );
        
      }

    gombKattint(){
        this.gombELEM.on("click",()=>{
            console.log(this)
            const e=new CustomEvent("katt",{detail:this.#index});
            window.dispatchEvent(e);
        })
    }
}