import { RouterProvider } from "react-router-dom";
import { initRoutes } from "./router";
import './mock'
import { generatesRoutes } from "./util/generatesRoutes";
import { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { useState, Suspense } from "react";
import { getMenu } from "./api/users";
import { setMenus } from './store/login/authSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { Spin } from "antd";
function App() {
  const [routes, setRoutes] = useState<any>(null);
  const dispatch = useDispatch();
 const { token } = useSelector((state: any) => state.authSlice);
  useEffect(() => {
    async function loadMenuData() {
      const { data } = await getMenu();
      if (data.length) {
        dispatch(setMenus(data))
        const routes = generatesRoutes(data)  //后台数据->转成路由数据
        const myRoutes = [...initRoutes];
        myRoutes[0].children = routes;
        myRoutes[0].children[0].index = true;
        const routeList = createBrowserRouter(myRoutes)
        setRoutes(routeList);
      } else {
        const routeList = createBrowserRouter(initRoutes)
        setRoutes(routeList);
      }
    }
    loadMenuData()
  }, [token])

  if (routes) {
    return (
      // Suspense作用是当子组件是懒加载时，显示fallback中的内容，当子组件加载完成后，显示子组件
      <Suspense fallback={<Spin></Spin>}  >
        <RouterProvider router={routes} />
      </Suspense>
    );
  } else {
    return  <Spin></Spin>;
  }

}

export default App;

