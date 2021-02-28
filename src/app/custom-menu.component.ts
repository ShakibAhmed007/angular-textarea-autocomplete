import { Component } from "@angular/core";
import { TextInputAutocompleteMenuComponent } from "angular-text-input-autocomplete";

@Component({
  template: `
    I'm a custom menu template!
    <ul
      *ngIf="choices?.length > 0"
      #dropdownMenu
      class="dropdown-menu"
      [style.top.px]="position?.top"
      [style.left.px]="position?.left"
    >
      <li
        *ngFor="let choice of choices; trackBy: trackById"
        [class.active]="activeChoice === choice"
      >
        <a href="javascript:;" (click)="selectChoice.next(choice)">
          {{ choice }}
        </a>
      </li>
    </ul>
  `
})
export class CustomMenuComponent extends TextInputAutocompleteMenuComponent {}
