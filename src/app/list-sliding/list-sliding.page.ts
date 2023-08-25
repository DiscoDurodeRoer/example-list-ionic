import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-sliding',
  templateUrl: './list-sliding.page.html',
  styleUrls: ['./list-sliding.page.scss'],
})
export class ListSlidingPage implements OnInit {

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

}
