import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPokemonResponse } from 'src/app/shared/models/interface-models';

@Component({
  selector: 'angprj-refuse',
  templateUrl: './refuse.component.html',
  styleUrls: ['./refuse.component.scss']
})
export class RefuseComponent implements OnInit {

  @Input() refuseChoice: IPokemonResponse[] = [];
  @Output() showDetails = new EventEmitter();
  @Output() delete = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
