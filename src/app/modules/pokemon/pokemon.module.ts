import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';

import { CatchComponent } from './pages/catch/catch.component';
import { RefuseComponent } from './pages/refuse/refuse.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';


@NgModule({
  declarations: [
    PokemonComponent,
    CatchComponent,
    RefuseComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
