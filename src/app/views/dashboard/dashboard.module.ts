import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ButtonsModule } from "ngx-bootstrap/buttons";

import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardScreenComponent } from "./dashboard-screen/dashboard-screen.component";
import { DashboardRightPanelComponent } from "./dashboard-right-panel/dashboard-right-panel.component";
import { DashboardSearchComponent } from "./dashboard-search/dashboard-search.component";
import { CommonModule } from "@angular/common";
import { TabsModule } from "ngx-bootstrap/tabs";
import { CarouselModule } from "ngx-bootstrap/carousel";

import { CollapseModule } from "ngx-bootstrap/collapse";
// Pagination Component
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
// Tooltip Component
import { TooltipModule } from "ngx-bootstrap/tooltip";
@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),

    CommonModule,
    FormsModule,

    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),

    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    DashboardScreenComponent,
    DashboardRightPanelComponent,
    DashboardSearchComponent,
  ],
})
export class DashboardModule {}
