import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  public pokemons: string[];

  constructor() {
    this.pokemons = [];
  }

  ngOnInit() {
    this.pokemons = [
      'Bulbasaur',
      'Ivysaur',
      'Venusaur',
      'Charmander',
      'Charmeleon',
      'Charizard',
      'Squirtle',
      'Wartortle',
      'Blastoise'
    ]
  }

  handleOrder($event: CustomEvent<ItemReorderEventDetail>){
    console.log($event);
    
    const pokemon = this.pokemons[$event.detail.from];
    this.pokemons.splice($event.detail.from, 1);
    this.pokemons.splice($event.detail.to, 0, pokemon);

    console.log( this.pokemons);
    
    $event.detail.complete();
  }

}
