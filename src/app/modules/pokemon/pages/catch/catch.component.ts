import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'angprj-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.scss']
})
export class CatchComponent implements OnInit {

  @Input() catchChoice: any[] = [];
  @Output() showDetails = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
