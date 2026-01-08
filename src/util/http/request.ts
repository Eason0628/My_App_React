import http from "../http";

// Promise要强制接收接口响应数据要解析成什么类型的接口，所以要定义一个接口告诉Promise要解析成什么类型
// 这里约定所有http请求响应接口会返回一个对象，对象中包含code、message、data三个属性
interface ApiResponse {
  code: number,
  message: string,
  data:any;
}

export function get(url: string, params?: any): Promise<ApiResponse> {
  return http.get(url, { params });
}

export function post(url: string, data?: any): Promise<ApiResponse> {
  return http.post(url, data);
}