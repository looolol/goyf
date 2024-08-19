import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {Icons} from "../models/icons.model";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  cardTypesIcon = Icons.cardTypes;

}
