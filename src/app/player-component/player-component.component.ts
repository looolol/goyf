import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from "@angular/material/icon";
import {Player} from "../models/player.model";
import {MatDialog} from "@angular/material/dialog";
import {PlayerSettingsDialogComponent} from "../player-settings-dialog/player-settings-dialog.component";



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
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.scss']
})
export class PlayerComponent implements OnInit {

  players: Player[] = [
    { id: 1, name: 'Player 1', creatureCount: 0 },
    { id: 2, name: 'Player 2', creatureCount: 0 },
    { id: 3, name: 'Player 3', creatureCount: 0 },
    { id: 4, name: 'Player 4', creatureCount: 0 },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadPlayerStates();
  }

  loadPlayerStates(): void {
    this.players.forEach(player => {
      const savedState = localStorage.getItem(`player-${player.id}`);
      if (savedState !== null) {
        const parsedState: Player = JSON.parse(savedState);
        player.name = parsedState.name;
        player.creatureCount = parsedState.creatureCount;
      }
    })
  }

  savePlayerStates(): void {
    this.players.forEach(player => this.savePlayerState(player));
  }

  savePlayerState(player: Player): void {
    localStorage.setItem(`player-${player.id}`, JSON.stringify(player));
  }

  openSettings(): void {

    const dialogRef = this.dialog.open(PlayerSettingsDialogComponent, {
      width: '250px',
      autoFocus: false,
      data: this.players
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.players = result;
        this.savePlayerStates();
      }
    })
  }


  creatureCount(player: Player): number {
    return player.creatureCount ? player.creatureCount: 0;
  }

  incrementCount(player: Player): void {
    player.creatureCount = this.creatureCount(player) + 1;
    this.onPlayerChange(player);
  }

  decrementCount(player: Player): void {
    player.creatureCount = this.creatureCount(player) - 1;

    if (player.creatureCount < 0) {
      player.creatureCount = 0;
    }

    this.onPlayerChange(player);
  }

  clearPlayer(player: Player): void {
    player.creatureCount = null;
  }

  resetPlayer(player: Player): void {
    if (!player.creatureCount) {
      player.creatureCount = 0;
    }
  }

  get totalCreatures(): number {
    return this.players.reduce((total, player) => total + this.creatureCount(player), 0);
  }

  onPlayerChange(player: Player): void {
      this.savePlayerState(player);
      console.log(`saved player: ${player}`);
  }

  clearAll(): void {
    this.players.forEach(player =>
      player.creatureCount = 0
    );
    this.savePlayerStates();
  }
}
