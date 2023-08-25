import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.page.html',
  styleUrls: ['./list-group.page.scss'],
})
export class ListGroupPage implements OnInit {

  public types: any;

  constructor() {
    this.types = [];
  }

  ngOnInit() {
    this.types = [
      {
        group: 'PLANTA',
        items: [
          'Bulbasaur',
          'Ivysaur',
          'Venusaur'
        ]
      },
      {
        group: 'FUEGO',
        items: [
          'Charmander',
          'Charmeleon',
          'Charizard',
        ]
      },
      {
        group: 'AGUA',
        items: [
          'Squirtle',
          'Wartortle',
          'Blastoise'
        ]
      }
    ]
  }

}
