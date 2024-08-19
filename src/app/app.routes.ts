import { Routes } from '@angular/router';
import {CardTypeTrackerComponent} from "./card-type-tracker/card-type-tracker.component";
import {PlayerComponent} from "./player-component/player-component.component";

export const routes: Routes = [
  { path: 'card-types', component: CardTypeTrackerComponent },
  { path: 'players', component: PlayerComponent },
  { path: '', component: CardTypeTrackerComponent },
];
