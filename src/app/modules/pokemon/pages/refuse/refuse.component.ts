import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'angprj-refuse',
  templateUrl: './refuse.component.html',
  styleUrls: ['./refuse.component.scss']
})
export class RefuseComponent implements OnInit {

  @Input() refuseChoice: any[] = [];
  @Output() showDetails = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
