import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member/member.component';
import { AdminHomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layout/layout.component';
import { LeftMenuComponent } from './pages/menu/left-menu/left-menu.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    MemberComponent,
    ReportComponent,
    AdminLayoutComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdminHomeComponent,
    MemberComponent,
    ReportComponent,
    AdminLayoutComponent

  ]
})
export class AdminModule { }
