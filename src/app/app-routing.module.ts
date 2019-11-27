import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './components/artist/album-list/album-list.component';
import { AboutComponent } from './components/artist/about/about.component';


const routes: Routes = [
  {path: 'albums', component: AlbumListComponent },
  {path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
