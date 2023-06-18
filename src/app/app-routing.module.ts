import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafaultComponent } from './layouts/dafault/dafault.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CreateClientComponent } from "./components/create/create-client/create-client.component";
import { ClientListComponent } from "./components/client-list.component";
import { ClientDetailComponent } from "./components/client-details.component";
import { HeartbeatChartComponent } from "./components/heartbeat-chart.component";
import { LoginComponent } from './components/login/login.component';
import { UpdateClientComponent } from './components/update/update-client/update-client.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to the login page
  { path: 'login', component: LoginComponent }, // Add the login route
    {
    path: 'def',
    component: DafaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },

    { path: 'posts', component: PostsComponent },
    { path: 'clients', component: ClientListComponent },
    { path: 'client/:id', component: ClientDetailComponent },
    { path: 'CreateClient', component: CreateClientComponent },
    { path: 'UpdateClient', component: UpdateClientComponent },
    { path: 'heartbeats', component: HeartbeatChartComponent }
    ]

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

