import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafaultComponent } from './layouts/dafault/dafault.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CreateClientComponent } from "./components/create/create-client/create-client.component";
import { ClientListComponent} from "./components/client-list.component";
import { ClientDetailComponent} from "./components/client-details.component";
import {HeartbeatChartComponent} from "./components/heartbeat-chart.component";

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/:id', component: ClientDetailComponent },

  { path: 'create-client', component: CreateClientComponent },

  { path: 'heartbeats', component: HeartbeatChartComponent },
  {
    path: '',
    component: DafaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    }, {
      path: 'posts',
      component: PostsComponent

    }]

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

