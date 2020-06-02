import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// 导入登录服务
import { LoginService } from './login.service';
// 导入路由服务
import { Router } from '@angular/router';
// 导入类型
import { LoginForm } from './login.type';
// 导入antd服务
import { NzMessageService } from 'ng-zorro-antd/message';
interface Token {
  token: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private message: NzMessageService
  ) { }
  loginForm: FormGroup;

  submitForm(): void {
    const loginForm = this.loginForm;
    const { controls } = loginForm;

    for (const i in controls) {
      if (controls.hasOwnProperty(i)) {
        controls[i].markAsDirty();
        controls[i].updateValueAndValidity();
      }
    }

    // 判断验证是否成功
    if (!loginForm.valid) {
      return;
    }

    const { userName, password } = loginForm.value;
    const loginParams: LoginForm = {
      username: userName,
      password
    };

    this.loginService.login(loginParams).subscribe((res: Token) => {
      localStorage.setItem('itcast-token', res.token);
      this.router.navigate(['/home']);
      this.message.create('success', '登录成功!');
    });
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [
        'zqran',
        [Validators.required, Validators.minLength(3), Validators.maxLength(6)]
      ],
      password: [
        '123456',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{3,6}$/)]
      ]
    });
  }
}
