import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

// import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent } from "./login/login.component";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ReModule } from './module/re/re.module';
import { OeModule } from './module/oe/oe.module';
import { CmModule } from './module/cm/cm.module';
import { BmModule } from './module/bm/bm.module';
import { AhModule } from './module/ah/ah.module';
import { DemoComponent } from './demo/demo.component';
import { AdminModule } from './module/admin/admin.module';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path:'demo',component:DemoComponent
  },
  {
    path:"role",
    component:AdminLayoutComponent,
    children:[
      {path:'re',loadChildren:()=>ReModule},
      {path:'oe',loadChildren:()=>OeModule},
      {path:'cm',loadChildren:()=>CmModule},
      {path:'bm',loadChildren:()=>BmModule},
      {path:'ah',loadChildren:()=>AhModule},
      {path:'admin',loadChildren:()=>AdminModule}
    ]
  },
  // {
  //   path: "Admin",
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       loadChildren:
  //         "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
  //     }
  //   ]
  // },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}