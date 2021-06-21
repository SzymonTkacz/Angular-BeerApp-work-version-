import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BreweryDetails } from 'src/interfaces/breweryDetails';
import { OptionsService } from '../services/options.service' //will be use here later

@Injectable({
  providedIn: 'root'
})
export class DataService {

  breweriesUrl = 'https://api.openbrewerydb.org/breweries';
  //breweries: Array<BreweryDetails>;
  type: string = "micro" //temporary variable

  constructor(private http: HttpClient) { }

  public getBreweries() {
    var response = this.http.get<BreweryDetails[]>(this.breweriesUrl)
    return response;
  }

  public getSelectedBrew() {
    //this method will be expanded
    var response = this.http.get<BreweryDetails[]>(
      `https://api.openbrewerydb.org/breweries?by_type=${this.type}`)
      return response
  }   
}
