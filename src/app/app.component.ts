import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CardTypeTrackerComponent} from "./card-type-tracker/card-type-tracker.component";
import {GraveyardTrackerComponent} from "./graveyard-tracker/graveyard-tracker.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {IconService} from "./services/icon.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    CardTypeTrackerComponent,
    GraveyardTrackerComponent,
  ],
  providers: [
    IconService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'goyf';

  constructor(private iconService: IconService) { }
}
