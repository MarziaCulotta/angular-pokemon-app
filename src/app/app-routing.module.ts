import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './modules/pokemon/pokemon.component';

const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'pokemon', loadChildren: () => import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
