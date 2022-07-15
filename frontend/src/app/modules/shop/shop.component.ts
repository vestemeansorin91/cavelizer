import {Component} from '@angular/core';
import {FOOTER_LINK_GROUPS_MOCK} from "./mock/footer-link-groups.mock";
import {LinkGroupInterface} from "./types/link-group.interface";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent{
  public footerLinkGroups: LinkGroupInterface[] = FOOTER_LINK_GROUPS_MOCK;
}
