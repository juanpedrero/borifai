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
import { ModalPlaylistComponent } from './components/sidenav/playlist/modal-playlist/modal-playlist.component';

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
    ModalPlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
