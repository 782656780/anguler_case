import { Component, OnInit } from '@angular/core';
// 导入服务
import { EmployessService } from '../employess.service';
// 导入antd服务
import { NzMessageService } from 'ng-zorro-antd';
// 导入HttpResponse
import { HttpResponse } from '@angular/common/http';

// 导入接口
import { Employee } from '../employee.type';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  // 列表
  employeesList: Employee[] = [];
  // 分页相关的数据
  curPage = 1;
  pagesize = 5;
  total: number;
  // 是否加载中
  isLoading: boolean;
  constructor(
    private employeesService: EmployessService,
    private nzMsgService: NzMessageService
  ) { }
  // 封装获取数据方法
  fetchData() {
    this.isLoading = true;
    this.employeesService
      .fetchData(this.curPage, this.pagesize)
      .subscribe((res: HttpResponse<Employee[]>) => {
        // 总条数
        this.total = +res.headers.get('X-Total-Count');
        this.employeesList = res.body;
        this.isLoading = false;
      });
  }
  // 列表追踪
  trackByEmpId(index: number, employee: Employee) {
    return employee.id;
  }
  // 删除员工
  handleDelete(id: number) {
    this.employeesService.delEmployee(id).subscribe(res => {
      this.employeesList = this.employeesList.filter(
        employee => employee.id !== id
      );
    });
  }
  // 取消删除
  handleDelCancel() {
    this.nzMsgService.info('取消删除', { nzDuration: 1000 })
  }
  ngOnInit(): void {
    this.fetchData();
  }
}
