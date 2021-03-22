import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MypublicationsScreenComponent } from "./mypublications-screen/mypublications-screen.component";

const routes: Routes = [
  {
    path: "",
    component: MypublicationsScreenComponent,
    data: {
      title: "",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypublicationsRoutingModule {}
