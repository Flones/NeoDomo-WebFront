// Angular
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MypublicationsRoutingModule } from "./mypublications-routing.module";

import { MypublicationsScreenComponent } from "./mypublications-screen/mypublications-screen.component";

@NgModule({
  imports: [CommonModule, MypublicationsRoutingModule],
  declarations: [MypublicationsScreenComponent],
})
export class MypublicationsModule {}
