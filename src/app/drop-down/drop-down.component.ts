import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  bro: any;
  breweryList = []

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getBreweries().subscribe(fetchedData => {
      fetchedData.forEach((element, index) => {
        var beer = {id: 0, name: ''}
        this.bro = element.name.toString();
        beer.id = index
        beer.name = this.bro;
        this.breweryList.push(beer)
      });
    });
  }

}
