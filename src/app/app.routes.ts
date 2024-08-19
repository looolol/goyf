import { Routes } from '@angular/router';
import {CardTypeTrackerComponent} from "./card-type-tracker/card-type-tracker.component";
import {GraveyardTrackerComponent} from "./graveyard-tracker/graveyard-tracker.component";

export const routes: Routes = [
  { path: 'card-types', component: CardTypeTrackerComponent },
  { path: 'graveyard', component: GraveyardTrackerComponent },
  { path: '', component: CardTypeTrackerComponent },
];
