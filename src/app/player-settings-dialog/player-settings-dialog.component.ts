import {Component, Inject, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {Player} from "../models/player.model";

@Component({
  selector: 'app-player-settings-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './player-settings-dialog.component.html',
  styleUrl: './player-settings-dialog.component.scss'
})
export class PlayerSettingsDialogComponent implements OnInit {

  players: Player[] = [];

  constructor(
    public dialogRef: MatDialogRef<PlayerSettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public prev_players: Player[]
  ) {}


  ngOnInit() {
    // Create a copy of the players array to avoid mutating the original data
    this.players = this.prev_players.map(player => ({
      ...player
    }));
  }

  clearPlayerName(player: Player) {
    player.name = "";
  }

  onNoClick(): void {
    this.dialogRef.close(this.prev_players);
  }

  save(): void {
    this.dialogRef.close(this.players);
  }

}
