import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class MusicService {

  constructor() { }

  public artists = [
    {
      id: 1,
      name: 'Queen',
      info: 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa.',
      img: '/assets/images/wallpaper_Queen.jpeg',
    },
    {
      id: 2,
      name: 'Warhola',
      info: 'Blending dramatic indie electronica and woozy alt-R&B, Warhola is the solo project of Belgian musician Oliver Symons (Bazart, Noble Tea). A native of Sint-Job-in-t-Goor in the province of Antwerp, Symons first found the national spotlight at the age of 15 as a competitor for the Belgian entry in the 2008 Junior Eurovision Song Contest. He won and presented his song "Shut Up" to an international audience that November. Less than two years after his 11th-place finish, he founded the indie rock band Noble Tea with guitarist Emiel Van Den Abbeele, guitarist/keyboard player Daan Schepers, bass player Moreno Claes, and drummer Antony Foscez. They released the Solitary Motions EP in 2012.',
      img: '/assets/images/wallpaper_Queen.jpeg',
    },

  ];

  public albums = [
    {
      id: 1,
      name: 'Greatest Hits',
      image: '../assets/images/cover_Queen_01.jpg',
      artistId: '1',
      year: "1975"
    },
    {
      id: 2,
      name: 'Queen 2',
      image: '../assets/images/cover_Queen_02.jpg',
      artistId: '1',
      year: "1978"
    },
    {
      id: 3,
      name: 'Anthology album',
      image: '../assets/images/cover_Queen_03.jpg',
      artistId: '1',
      year: "1979"
    },
    {
      id: 4,
      name: 'Queen Red',
      image: '../assets/images/cover_Queen_04.jpg',
      artistId: '1',
      year: "1980"
    },
    {
      id: 5,
      name: 'Greatest Hits 2',
      image: '../assets/images/cover_Queen_05.jpg',
      artistId: '1',
      year: "1985"
    },
    {
      id: 6,
      name: 'Queen in nuce',
      image: '../assets/images/cover_Queen_06.jpg',
      artistId: '1',
      year: "1988"
    },
    {
      id: 7,
      name: 'Young Loving',
      image: '../assets/images/cover_Warhola_01.jpg',
      artistId: '2',
      year: "1975"
    },
    {
      id: 8,
      name: 'Saliva',
      image: '../assets/images/cover_Warhola_02.jpg',
      artistId: '2',
      year: "1995"
    },
    {
      id: 9,
      name: 'Artist Title',
      image: '../assets/images/cover_Warhola_03.jpg',
      artistId: '2',
      year: "1992"
    },
    {
      id: 10,
      name: 'Encore',
      image: '../assets/images/cover_Warhola_04.jpg',
      artistId: '2',
      year: "2001"
    },
    {
      id: 11,
      name: 'Supernatural',
      image: '../assets/images/cover_Warhola_05.jpg',
      artistId: '2',
      year: "2004"
    }
  ];


  public songs = [
    {
      id: 1,
      name: 'Dont stop me now',
      albumId: 1,
      artistId: 1,
    },
    {
      id: 2,
      name: 'I want to break free',
      albumId: 1,
      artistId: 1,
    },
    {
      id: 3,
      name: 'Killer Queen',
      albumId: 1,
      artistId: 1,
    },
    {
      id: 4,
      name: 'Somebody to love',
      albumId: 1,
      artistId: 1,
    },
    {
      id: 5,
      name: 'Bohemian Rhapsody',
      albumId: 1,
      artistId: 1,
    },
    {
      id: 6,
      name: 'Dont stop me now',
      albumId: 2,
      artistId: 1,
    },
    {
      id: 7,
      name: 'I want to break free',
      albumId: 2,
      artistId: 1,
    },
    {
      id: 8,
      name: 'Killer Queen',
      albumId: 2,
      artistId: 1,
    },
    {
      id: 9,
      name: 'Somebody to love',
      albumId: 2,
      artistId: 1,
    },
    {
      id: 10,
      name: 'Bohemian Rhapsody',
      albumId: 2,
      artistId: 1,
    },
    {
      id: 11,
      name: 'Red',
      albumId: 3,
      artistId: 2,
    },
    {
      id: 12,
      name: 'Aura',
      albumId: 3,
      artistId: 2,
    },
    {
      id: 13,
      name: 'Glow',
      albumId: 3,
      artistId: 2,
    },
    {
      id: 14,
      name: 'Lookt at me',
      albumId: 3,
      artistId: 2,
    },
    {
      id: 15,
      name: 'Promise',
      albumId: 3,
      artistId: 2,
    },
    {
      id: 16,
      name: 'Jewels',
      albumId: 3,
      artistId: 2,
    },
    {
      id: 17,
      name: 'Red',
      albumId: 4,
      artistId: 2,
    },
    {
      id: 18,
      name: 'Aura',
      albumId: 4,
      artistId: 2,
    },
    {
      id: 19,
      name: 'Glow',
      albumId: 4,
      artistId: 2,
    },
    {
      id: 20,
      name: 'Lookt at me',
      albumId: 4,
      artistId: 2,
    },
    {
      id: 21,
      name: 'Promise',
      albumId: 4,
      artistId: 2,
    },
    {
      id: 22,
      name: 'Jewels',
      albumId: 4,
      artistId: 2,
    }
  ];

  // -- Funcion para buscar el nombre del artista ---
    getArtistNameById(id) {
    const myArtist = this.artists.find((artist) => {
      return artist.id === id
    })
    return myArtist.name;
  }

// -- Funcion para buscar imagen del disco ---
  getAlbumImgById(id) {
    const myAlbum = this.albums.find((album) => {
      return album.id === id
    })
    return myAlbum.image;
  }

//
getAlbumList(artista) {
  const idArtist = artista.id
  //filter
}


  // --- Funcion para desplegar songlist ---
  getSongList(){

  }

} // fin export class

