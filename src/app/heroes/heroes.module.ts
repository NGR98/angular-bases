import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  //Añadido para que funcine los ngIf - ngFor -ect
  imports:[
    CommonModule
  ]
})
export class HeroesModule {}
