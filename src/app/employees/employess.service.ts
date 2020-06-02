import { Injectable } from '@angular/core';

// 导入HttpClient
import { HttpClient } from '@angular/common/http';
// 导入配置
import { URL } from '../config';
// 导入接口
import { Employee } from './employee.type';

@Injectable({
  providedIn: 'root'
})
export class EmployessService {

  constructor(private http: HttpClient) { }
  // 获取数据
  fetchData(curPage: number, pageSize) {
    const employeeUrl = `${URL}/employees?_page=${curPage}&_limit=${pageSize}`;
    return this.http.get<Employee[]>(employeeUrl, {
      // 传入参数获取完整响应体
      observe: 'response'
    });
  }
  // 删除数据
  delEmployee(id: number) {
    return this.http.delete(`${URL}/employees/${id}`, {
    });
  }
}
