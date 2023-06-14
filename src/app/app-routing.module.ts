import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './Components/client-list.component';

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  // Add other routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

