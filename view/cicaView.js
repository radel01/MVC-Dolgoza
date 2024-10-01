/* View:  8 pont

Az adatok megjelenítése  li és span, button elemek 
Saját adattagok létrehozása
Az egyes elemek megfogása
Eseménykezelő hozzárendelése a gombhoz. 
Saját esemény létrehozása */

/* Feladat, hogy jelenítsd meg az oldalon az adatokat listában egymás alatt !

Minden rekordhoz (soronként) legyen egy gomb a sor elején, amire kattintva a terméket töröljük a listából. */

export default class Cica{
    #cicaAdat={};
    #szuloELEM;
    #index;


    constructor(adat, index, szuloELEM){
        this.#index=index
        this.#cicaAdat=adat;
        this.#szuloELEM=szuloELEM;
        this.gombELEM=$(".kiv:last-child");
        this.cicaKiir();
        this.gombKattint();
    }
    
    cicaKiir() {
        this.#szuloELEM.append(
          `
          <span class="sor">
          
          <li><button type="button" class="kiv btn btn-dark" >Törlés</button>${this.#cicaAdat.Id}</li>
          </span>
          <span class="sor">
          <li><button type="button" class="kiv btn btn-dark" >Törlés</button>${this.#cicaAdat.db}</li>
          </span>
          <span class="sor">
          <li><button type="button" class="kiv btn btn-dark" >Törlés</button>${this.#cicaAdat.nev}</li>
          </span>
          <span class="sor">
          <li><button type="button" class="kiv btn btn-dark" >Törlés</button>${this.#cicaAdat.kor}</li>
          </span>
          <span class="sor">
          <li><button type="button" class="kiv btn btn-dark" >Törlés</button>${this.#cicaAdat.nem}</li>
          </span>

        `
        );
        
      }

    gombKattint(){
        this.gombELEM.on("click",()=>{
            const e=new CustomEvent("katt",{detail:this.#index});
            window.dispatchEvent(e);
        })
    }
}