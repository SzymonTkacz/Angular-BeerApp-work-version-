import { Component, Input, OnInit } from '@angular/core';
import { OptionsService } from '../../services/options.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() type: string; //will be use later

  constructor() { }

  ngOnInit(): void {
  }

}
