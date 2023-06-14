import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DafaultComponent } from './dafault.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    DafaultComponent,
    DashboardComponent,
    PostsComponent,
      ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule


  ]
})
export class DafaultModule { }
