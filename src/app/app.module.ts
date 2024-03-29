import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/sidenav/navbar/navbar.component';
import { PlaylistComponent } from './components/sidenav/playlist/playlist.component';
import { SearchComponent } from './components/header/search/search.component';
import { UserComponent } from './components/header/user/user.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PlayerComponent } from './components/player/player.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumListComponent } from './components/artist/album-list/album-list.component';
import { SongListComponent } from './components/artist/song-list/song-list.component';
import { SongTimePipe } from './components/player/pipes/song-time.pipe';
import { AlbumCardComponent } from './components/artist/album-card/album-card.component';
import { ModalPlaylistComponent } from './components/sidenav/playlist/modal-playlist/modal-playlist.component';
import { AboutComponent } from './components/artist/about/about.component';
import { AboutCardComponent } from './components/artist/about/about-card/about-card.component';
import { RelatedArtistsComponent } from './components/artist/related-artists/related-artists.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    PlaylistComponent,
    SearchComponent,
    UserComponent,
    SidenavComponent,
    PlayerComponent,
    ArtistComponent,
    AlbumListComponent,
    SongListComponent,
    SongTimePipe,
    AlbumCardComponent,
    ModalPlaylistComponent,
    AboutComponent,
    AboutCardComponent,
    RelatedArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
