import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-artists',
  templateUrl: './related-artists.component.html',
  styleUrls: ['./related-artists.component.scss']
})
export class RelatedArtistsComponent implements OnInit {
  
  artists = [
    {
      id: 1,
      name: "Rosalia",
      info: "Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa.",
      img: "/assets/images/wallpaper_Rosalia.jpg",
    },
    {
      id: 2,
      name: "Warhola",
      info: "Blending dramatic indie electronica and woozy alt-R&B, Warhola is the solo project of Belgian musician Oliver Symons (Bazart, Noble Tea). A native of Sint-Job-in-t-Goor in the province of Antwerp, Symons first found the national spotlight at the age of 15 as a competitor for the Belgian entry in the 2008 Junior Eurovision Song Contest. He won and presented his song 'Shut Up' to an international audience that November. Less than two years after his 11th-place finish, he founded the indie rock band Noble Tea with guitarist Emiel Van Den Abbeele, guitarist/keyboard player Daan Schepers, bass player Moreno Claes, and drummer Antony Foscez. They released the Solitary Motions EP in 2012.",
      img: "/assets/images/wallpaper_Warhola.jpg",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
