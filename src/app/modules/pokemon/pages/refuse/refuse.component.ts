import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angprj-refuse',
  templateUrl: './refuse.component.html',
  styleUrls: ['./refuse.component.scss']
})
export class RefuseComponent implements OnInit {

  @Input() refuseChoice: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
