import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './components/artist/album-list/album-list.component';
import { AboutComponent } from './components/artist/about/about.component';
import { RelatedArtistsComponent } from './components/artist/related-artists/related-artists.component';


const routes: Routes = [
  {path: 'albums', component: AlbumListComponent },
  {path: 'about', component: AboutComponent },
  {path: 'related-artists', component:RelatedArtistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
