import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angprj-rifiuta',
  templateUrl: './rifiuta.component.html',
  styleUrls: ['./rifiuta.component.scss']
})
export class RifiutaComponent implements OnInit {

  @Input() refuseChoice: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
