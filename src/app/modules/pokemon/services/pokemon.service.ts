import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemonResponse } from 'src/app/shared/models/interface-models';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly http: HttpClient) { }

  getPokemon():Observable<IPokemonResponse> {
    const num = Math.floor(Math.random() * 898) + 1;
    return this.http.get<any>(`${environment.apiURL}${num}`)
    .pipe(
      map( res => ({
        id: res.id,
        name: res.name,
        sprites: res.sprites.other['official-artwork'].front_default,
        height: res.height,
        weight: res.weight,
        hp:res.stats[0].base_stat
      }))
    )
  }

}
