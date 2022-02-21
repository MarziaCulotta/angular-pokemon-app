import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemonResponse } from 'src/app/shared/models/interface-models';


@Component({
  selector: 'angprj-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.scss']
})
export class CatchComponent implements OnInit {

  @Input() catchChoice: IPokemonResponse[] = [];
  @Output() showDetails = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor( private readonly router: Router) { }

  ngOnInit(): void {
  }



  // btnClick() {
  //   this.router.navigateByUrl('/details');
  // }

}
