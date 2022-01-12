import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { CatturaComponent } from './pages/cattura/cattura.component';
import { RifiutaComponent } from './pages/rifiuta/rifiuta.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';


@NgModule({
  declarations: [
    PokemonComponent,
    CatturaComponent,
    RifiutaComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
