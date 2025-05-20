import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from "./dashboard/header/header.component";
import { ServeStatusComponent } from './dashboard/serve-status/serve-status.component';
import { SupportTicketsComponent } from "./dashboard/support-tickets/support-tickets.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServeStatusComponent, SupportTicketsComponent, TrafficComponent, DashboardItemComponent],
})
export class AppComponent {
}
