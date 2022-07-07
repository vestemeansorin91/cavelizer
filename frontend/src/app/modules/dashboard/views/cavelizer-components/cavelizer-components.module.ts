import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SharedModule} from "../../../../shared/shared.module";
import {CavelizerComponentsComponent} from "./cavelizer-components.component";
import {ButtonExampleComponent} from "./components/button-example/button-example.component";
import {DropdownExampleComponent} from './components/dropdown-example/dropdown-example.component';

const COMPONENTS = [
  CavelizerComponentsComponent,
  ButtonExampleComponent,
  DropdownExampleComponent
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, SharedModule],
})
export class CavelizerComponentsModule {
}
