import {InnerTabComponent} from './inner-tab/inner-tab.component';

export class TabGroupBase {
  isActive: (tab: InnerTabComponent) => boolean;
}
