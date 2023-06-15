import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafaultComponent } from './layouts/dafault/dafault.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
<<<<<<< HEAD
import { ClientListComponent } from "./Components/client-list.component";
import { ClientDetailComponent } from "./Components/client-details.component";
import { CreateClientComponent } from "./components/create/create-client/create-client.component";
=======
import { ClientListComponent} from "./components/client-list.component";
import { ClientDetailComponent} from "./components/client-details.component";
import {HeartbeatChartComponent} from "./components/heartbeat-chart.component";
>>>>>>> 18543e1f060e3df7ed5b9cbf13c912a53cb61fe1

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/:id', component: ClientDetailComponent },
<<<<<<< HEAD
  { path: 'create-client', component: CreateClientComponent },
=======
  { path: 'heartbeats', component: HeartbeatChartComponent },
>>>>>>> 18543e1f060e3df7ed5b9cbf13c912a53cb61fe1
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

