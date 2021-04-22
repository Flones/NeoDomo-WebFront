// Angular
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NewpostRoutingModule } from "./newpost-routing.module";

import { NewpostComponent } from './newpost/newpost.component';

@NgModule({
  imports: [CommonModule, NewpostRoutingModule],
  declarations: [NewpostComponent],
})
export class NewpostModule {}
