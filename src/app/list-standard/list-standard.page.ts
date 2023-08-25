import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-standard',
  templateUrl: './list-standard.page.html',
  styleUrls: ['./list-standard.page.scss'],
})
export class ListStandardPage implements OnInit {

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
