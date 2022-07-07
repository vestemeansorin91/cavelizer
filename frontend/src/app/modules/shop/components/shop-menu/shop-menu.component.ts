import {Component} from '@angular/core';

interface Menu {
  menuLabel: string;
  options: DropdownOption[]
}

interface DropdownOption {
  value: string;
}

@Component({
  selector: 'app-shop-menu',
  templateUrl: './shop-menu.component.html',
  styleUrls: ['./shop-menu.component.scss']
})
export class ShopMenuComponent {
  public menuItems: Menu[] = [
    {
      menuLabel: 'Bakery',
      options: [
        {value: 'Paine'},
        {value: 'Covrigi'},
        {value: 'Pateu'},
        {value: 'Masline'},
        {value: 'Cacareze'},
      ]
    },
    {
      menuLabel: 'Fruit and vegetables',
      options: [
        {value: 'Rosii'},
        {value: 'Castravezi'},
        {value: 'Prune'},
        {value: 'Mango'},
        {value: 'Banana'},
      ]
    }, {
      menuLabel: 'Meat and fish',
      options: [
        {value: 'Carne de porc'},
        {value: 'Carne de vita'},
        {value: 'Carne de oaie'},
        {value: 'Pula de porc'},
        {value: 'Pestisorul auriu (nemo)'},
      ]
    }, {
      menuLabel: 'Drinks',
      options: [
        {value: 'Vodka'},
        {value: 'Bere'},
        {value: 'Cidru de fetite'},
        {value: 'Crema de whiskey'},
        {value: 'Rom'},
      ]
    }, {
      menuLabel: 'Kitchen',
      options: [
        {value: 'Cutit'},
        {value: 'Furculita'},
      ]
    },
    {
      menuLabel: 'Special nutrition',
      options: [
        {value: 'Proteine'},
        {value: 'Creatina'},
        {value: 'Amino-acizi'},
      ]
    }, {
      menuLabel: 'Baby',
      options: [
        {value: 'Scutec'},
        {value: 'Pudra'},
        {value: 'Mancare'},
      ]
    }, {
      menuLabel: 'Pharmacy',
      options: [
        {value: 'Paracetamol'},
        {value: 'Vitamine'},
        {value: 'Acidacetilsalicilic'},
      ]
    }
  ];

  public test(ev: any): any {
    console.log(ev)
  }
}
