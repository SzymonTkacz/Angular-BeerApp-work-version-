import { Component } from '@angular/core';
import { OptionsService } from '../services/options.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Beer Application';

  constructor(public optionsService: OptionsService) {
  }
}
