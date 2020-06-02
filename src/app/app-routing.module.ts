import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// 导入守卫服务
import { AuthGuard } from './auth.guard';
const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // 路由守卫
    canActivate: [AuthGuard],
    // 子路由
    children: [
      {
        path: 'employee',
        // 以前版本写法
        // loadChildren: './employees/employees.module#EmployeesModule'
        loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
