import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SharedModule} from "../../../../shared/shared.module";
import {CavelizerComponentsComponent} from "./cavelizer-components.component";
import {ButtonExampleComponent} from "./components/button-example.component";
import {DropdownExampleComponent} from "./components/dropdown-example.component";
import {IconsExampleComponent} from "./components/icons-example.component";
import {MiniBannerExampleComponent} from "./components/mini-banner-example.component";
import {InnerTabGroupExampleComponent} from "./components/inner-tab-group-example.component";

const COMPONENTS = [
  CavelizerComponentsComponent,
  ButtonExampleComponent,
  DropdownExampleComponent,
  MiniBannerExampleComponent,
  IconsExampleComponent,
  InnerTabGroupExampleComponent
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, SharedModule],
})
export class CavelizerComponentsModule {
}
