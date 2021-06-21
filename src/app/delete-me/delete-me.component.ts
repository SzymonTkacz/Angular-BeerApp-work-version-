import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { BreweryDetails } from 'src/interfaces/breweryDetails';

@Component({
  selector: 'app-delete-me',
  templateUrl: './delete-me.component.html',
  styleUrls: ['./delete-me.component.scss']
})
export class DeleteMeComponent implements OnInit {
  //---------------------------------
  // This all component will be removed
  //---------------------------------

  bro: any;
  someArray: Array<{ name: string }> = []

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  getData(): void {
    var response =this.data.getSelectedBrew().subscribe(fetchedData=>{
      fetchedData.forEach(element => {
         this.bro = element.name;
         this.someArray.push(this.bro)
         //console.log(this.bro);
         //this.response = JSON.stringify(element)
         //this.bro = this.response.address_2;
         //console.log(this.bro)
         //console.log(typeof(this.response));
         //console.log(this.response);

      });

      console.log(this.someArray)

      // this.responses = this.data.getBeers().subscribe(fetchedData => {
      //   console.log(fetchedData);
      //   console.log(typeof(this.responses));
      // });
      //this.breweries = ObjectMa

      // this.responses = JSON.stringify(fetchedData);
      // console.log(typeof(this.responses));
      // console.log(this.responses);
    });
    //this.data.getItems();
  }

}
