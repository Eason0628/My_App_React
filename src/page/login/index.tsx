import bg from '../../assets/bg.jpg'
import logo from '../../assets/logo.png'
import lgbg from '../../assets/lgbg.jpg'
import './index.scss'

import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '../../api/users';
import { setToken } from '../../store/login/authSlice';
import { useDispatch } from 'react-redux';

function Login() {
  // AntD Form getFromInstance
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleLogin = () => {
    form.validateFields().then(async (res) => {
      const { data: { token } } = await login(res);
      console.log('Login success:', token);
      dispatch(setToken(token));
    }).catch((err) => {
      console.log('Login failed:', err);
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
              <Button type="primary" htmlType="submit" style={{ width: '100%' }} onClick={handleLogin}>
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