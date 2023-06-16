import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafaultComponent } from './layouts/dafault/dafault.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CreateClientComponent } from "./components/create/create-client/create-client.component";
import { ClientListComponent} from "./components/client-list.component";
import { ClientDetailComponent} from "./components/client-details.component";
import {HeartbeatChartComponent} from "./components/heartbeat-chart.component";
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
 
  {
    path: '',
    component: DafaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    }, {
      path: 'posts',
      component: PostsComponent
    },
   { path: 'clients', component: ClientListComponent },
   { path: 'login', component: LoginComponent },
  { path: 'clients/:id', component: ClientDetailComponent },

  { path: 'CreateClient', component: CreateClientComponent },

  { path: 'heartbeats', component: HeartbeatChartComponent }
  ]

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

