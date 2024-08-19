import { Injectable } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

export enum Icons {
  land='land',
  creature = 'creature',
  instant='instant',
  sorcery='sorcery',
  artifact='artifact',
  enchantment='enchantment',
  planeswalker='planeswalker',
  battle='battle',
  kindred='kindred',
  cardTypes="planeswalker",
  graveyard='graveyard',
}

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private readonly iconUrl = 'assets/icons';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.registerIcons();
  }

  public registerIcons(): void {
    console.log('register icons');
    this.loadIcons(Object.values(Icons));
  }

  private loadIcons(iconKeys: string[]): void {
    iconKeys.forEach(key => {
      const url = `${this.iconUrl}/${key}.svg`;
      console.log('Registering icon', key, 'with URL', url);

      this.matIconRegistry.addSvgIcon(
        key,
        this.domSanitizer.bypassSecurityTrustResourceUrl(url)
      );
    });
  }
}
