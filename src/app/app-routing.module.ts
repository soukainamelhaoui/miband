import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafaultComponent } from './layouts/dafault/dafault.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ClientListComponent} from "./Components/client-list.component";
import { ClientDetailComponent} from "./Components/client-details.component";

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/:id', component: ClientDetailComponent },
  {
  path: '',
  component: DafaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },{
   path: 'posts',
   component: PostsComponent

}]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

