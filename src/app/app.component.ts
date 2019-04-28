import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  private tabMot: string[] = ['valentina','carmen'];
  private index: number = -1;
  private _motATrouve: string;
  private _motTape: string;
  private _erreur: boolean;
  private _derniereLettreTapee: string;
  private _lettreSuggeree: string;

  constructor(){
    this._motATrouve = '';
    this._motTape = '';
  }

  ngOnInit(){
    this.chargeNewWord();
    this.reset();
  }

  onKey(event: any) {
    console.log('onKey');
    if(!this._erreur){
    console.log('event.target.value','|' + event.target.value + '|');
    console.log('this._motTape','|' + this._motTape + '|');

    // gestion clavier
    if(event.target.value.length < this._motTape.length){
      console.log('del tape');
      this._derniereLettreTapee = 'del';
      this._motTape = event.target.value;
    }else{
      this._motTape = event.target.value;
      this._derniereLettreTapee = this._motTape.charAt(this._motTape.length - 1);  
      this.checkLettre();
    }

    this._lettreSuggeree = this._motATrouve.charAt(this._motTape.length);
    }
  }

  checkLettre(){

    if(this._motTape === this._motATrouve){
      console.log('GAGNE !');
      // TODO charger un nouveau mot, reset
      this.chargeNewWord();
      this.reset();
      return;
    }

    if(this._motATrouve.charAt(this._motTape.length - 1) == this._derniereLettreTapee){
      this._erreur = false;
      console.log('good !');
    }else{
      this._erreur = true;
      console.log('coin coin !');
    }

  }

  chargeNewWord(){
    console.log('chargeNewWord');
    this.index++;
    this._motATrouve = this.tabMot[this.index];
    this._lettreSuggeree = this._motATrouve.charAt(this._motTape.length);
  }

  reset(){
    this._motTape = '';
    this._erreur = false;
  }

}
