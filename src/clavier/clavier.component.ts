import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'clavier',
  templateUrl: './clavier.component.html',
  styleUrls: ['./clavier.component.css']
})
export class ClavierComponent implements OnInit, OnChanges {

  @Input() lettreTapee: string;
  @Input() lettreSuggeree: string;
  lettresClavier: string[];
  azertyClavier: string[] =
  ['a','z','e','r','t','y','u','i','o','p','q','s','d','f','g','h','j','k','l','m',
  'w','x','c','v','b','n',' ','del'];


  constructor() { }

  ngOnInit() {
    this.lettresClavier = this.azertyClavier;
  }

  ngOnChanges(changes: SimpleChanges) {
    
  }

  isLettreTapee(lettreClavier: string){
    //console.log(lettreClavier, this.lettreSuggeree, this.lettreTapee);
    if(this.lettreSuggeree === lettreClavier && this.lettreTapee === lettreClavier){
      return 'trouvee';
    }
    else if(this.lettreSuggeree === lettreClavier){
      return 'suggeree';
    }
    else if(this.lettreTapee === lettreClavier)
    {
      return 'tapee';
    }
    else{
      return '';
    }
  }

  generateArray(start: number, end: number): number[] {
    let result: number[] = [];
    for(let i = 0 ; i < (end - start) ; i++){
      result[i] = i + start;
    }
    return result;
    //return [...Array(n).keys()].map(i => i + startFrom);
  }

}