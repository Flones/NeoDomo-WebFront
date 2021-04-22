import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewpostComponent } from "./newpost/newpost.component";

const routes: Routes = [
  {
    path: "",
    component: NewpostComponent,
    data: {
      title: "",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpostRoutingModule {}
