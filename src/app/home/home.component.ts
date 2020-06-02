import { Component, OnInit } from '@angular/core';
// 导入服务
import { HomeService } from './home.service';
// 导入路由服务
import { Router } from '@angular/router';
// 导入antd服务
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService,
    private router: Router,
    private message: NzMessageService
  ) { }
  isCollapsed = false;
  // 退出
  logout() {
    this.homeService.logout().subscribe(
      res => {
        // 先清除本地的token
        localStorage.removeItem('itcast-token');
        // 再跳转到登录页
        this.router.navigate(['/login']);
        this.message.create('success', '退出成功!');
      },
      err => {
        this.message.create('warning', '好像出错了~ 请稍候再试');
      }
    )
  }

  ngOnInit(): void {
  }

}
