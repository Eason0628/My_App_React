import bg from '../../assets/bg.jpg'
import logo from '../../assets/logo.png'
import lgbg from '../../assets/lgbg.jpg'
import './index.scss'

import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '../../api/users';
import { setToken } from '../../store/login/authSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { replace, useNavigate } from "react-router-dom";

function Login() {
  // AntD Form getFromInstance
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleLogin = () => {
    form.validateFields().then(async (res) => {
      setIsLoading(true)
      const { data: { token } } = await login(res);
      console.log('Login success:', token);
      setIsLoading(false)
      dispatch(setToken(token));
      // for redirect to home page
      navigate("/",{replace:true});
    }).catch((err) => {
      console.log('Login failed:', err);
      setIsLoading(false)
    })
  };

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

          <Form form={form}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Please input your username" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Please input your password" prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }} onClick={handleLogin}
                loading={isLoading}>
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;