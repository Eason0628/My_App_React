import bg from '../../assets/bg.jpg'
import logo from '../../assets/logo.png'
import lgbg from '../../assets/lgbg.jpg'
import './index.scss'

import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

function Login() {
  return (
    <div className="login" style={{ backgroundImage: `url(${bg})` }}>
      <div className="lgbg" style={{ backgroundImage: `url(${lgbg})` }}>
        <div className="part">
          <div className='title'>
            <div className='logo'>
              <img src={logo} width={100} alt='' />
            </div>
            <h1>Intelegent Park</h1>
          </div>
          <Form >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密  码"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;