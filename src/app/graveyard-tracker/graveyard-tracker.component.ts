import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-graveyard-tracker',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './graveyard-tracker.component.html',
  styleUrls: ['./graveyard-tracker.component.scss']
})
export class GraveyardTrackerComponent {
  players = [
    { name: 'Player 1', creatureCount: 0 },
    { name: 'Player 2', creatureCount: 0 },
    { name: 'Player 3', creatureCount: 0 },
    { name: 'Player 4', creatureCount: 0 }
  ];

  incrementCount(player: any) {
    player.creatureCount++;
  }

  get totalCreatures() {
    return this.players.reduce((total, player) => total + player.creatureCount, 0);
  }

  clearAll() {
    this.players.forEach(player =>
      player.creatureCount = 0
    );
  }
}
