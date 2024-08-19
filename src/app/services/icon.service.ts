import { Injectable } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {Icons} from "../models/icons.model";

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private readonly iconUrl = 'assets/icons';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.registerIcons();
  }

  public registerIcons(): void {
    this.loadIcons(Object.values(Icons));
  }

  private loadIcons(iconKeys: string[]): void {
    iconKeys.forEach(key => {
      const url = `${this.iconUrl}/${key}.svg`;

      this.matIconRegistry.addSvgIcon(
        key,
        this.domSanitizer.bypassSecurityTrustResourceUrl(url)
      );
    });
  }
}
