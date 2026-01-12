import { Menu } from 'antd';
import { getMenu } from '../../api/users';
import { useEffect, useState } from 'react';
import icons from './iconList';
import type { MenuProps } from 'antd';
import logo from '../../assets/logo.png'
import "./index.scss"
import { setMenus } from '../../store/login/authSlice';
import { useDispatch } from 'react-redux';

type MenuItem = Required<MenuProps>['items'][number];
interface MenuItemFromData {
  key: string;
  label: string;
  icon: string;
  children?: MenuItemFromData[];
}

function NavLeft() {
  const dispatch = useDispatch()
  const [menu, setMenu] = useState<MenuItem[]>([])
  useEffect(() => {
    configMenu()
  }, [])

  async function configMenu() {
    const { data } = await getMenu()
    dispatch(setMenus(data))
    const menuData = mapMenuItems(data)
    setMenu(menuData)
  }

  function mapMenuItems(items: MenuItemFromData[]): any {
    return items.map((item: MenuItemFromData) => ({
      key: item.key,
      label: item.label,
      icon: icons[item.icon],
      children: item.children ? mapMenuItems(item.children) : null
    }))
  }


  return (
    <div className='navleft'>
      <div className='logo'>
        <img src={logo} alt="" width={18} />
        <h1>Intelegent Park</h1>
      </div>
      <Menu
        defaultOpenKeys={['/dashboard']}
        mode="inline"
        theme="dark"
        items={menu}
      />
    </div>
  );
}
export default NavLeft;