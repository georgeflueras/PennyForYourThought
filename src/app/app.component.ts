import { Component } from '@angular/core';
import { LiveDbService } from './live-db.service';
import { LocalDbService } from './services/local-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PennyForYourThoughts';
  constructor() {
  }
}
