import { Component, OnInit } from '@angular/core';
import {MatSlideToggleChange, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatLabel} from "@angular/material/form-field";
import {CardTypeToggle} from "../models/toggle.model";
import {Icons} from "../models/icons.model";

@Component({
  selector: 'app-card-type-tracker',
  standalone: true,
  imports: [
    CommonModule,
    MatLabel,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './card-type-tracker.component.html',
  styleUrl: './card-type-tracker.component.scss',
})
export class CardTypeTrackerComponent implements OnInit {
  toggles: CardTypeToggle[] = [
    { label: 'Creature', icon: Icons.creature, checked: false },
    { label: 'Land', icon: Icons.land, checked: false },
    { label: 'Instant', icon: Icons.instant, checked: false },
    { label: 'Sorcery', icon: Icons.sorcery, checked: false },
    { label: 'Artifact', icon: Icons.artifact, checked: false },
    { label: 'Enchantment', icon: Icons.enchantment, checked: false },
    { label: 'Planeswalker', icon: Icons.planeswalker, checked: false },
    { label: 'Battle', icon: Icons.battle, checked: false },
    { label: 'Kindred', icon: Icons.kindred, checked: false }
  ];

  ngOnInit(): void {
    this.loadToggleStates();
  }

  loadToggleStates(): void {
    this.toggles.forEach(toggle => {
      const savedState = localStorage.getItem(`toggle-${toggle.label}`);
      if (savedState !== null) {
        toggle.checked = JSON.parse(savedState);
      }
    });
  }

  saveToggleState(toggle: CardTypeToggle): void {
    localStorage.setItem(`toggle-${toggle.label}`, JSON.stringify(toggle.checked));
  }

  get goyfCount(): string {
    const toggleTotal = this.toggles.filter(toggle => toggle.checked).length;
    return `${toggleTotal}/${toggleTotal + 1}`;
  }

  onToggleChange(event: MatSlideToggleChange, toggle: CardTypeToggle): void {
    toggle.checked = event.checked;
    this.saveToggleState(toggle);
  }

  clearToggles(): void {
    this.toggles.forEach(toggle => {
      toggle.checked = false;
      this.saveToggleState(toggle);
    });
  }
}
