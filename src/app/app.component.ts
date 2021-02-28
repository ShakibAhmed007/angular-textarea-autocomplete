import { Component, VERSION } from '@angular/core';
import { CustomMenuComponent } from './custom-menu.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  formControlValue = '';
  menuComponent = CustomMenuComponent;

  findChoices(searchText: string) {
    return ['Cricket', 'Football', 'Tenis'].filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  getChoiceLabel(choice: string) {
    return `@${choice} `;
  }
}
