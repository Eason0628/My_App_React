import { RouterProvider } from "react-router-dom";
import { initRoutes } from "./router";
import './mock'
import { generatesRoutes } from "./util/generatesRoutes";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import { useState, Suspense } from "react";
import { getMenu } from "./api/users";
import { setMenus } from './store/login/authSlice';
import { useDispatch } from 'react-redux';
function App() {
  const { menuList } = useSelector((state: any) => state.authSlice);
  const [routes, setRoutes] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      // sessionStorage.setItem("token", "mocktoken123456admin");
      const { data } = await getMenu();
      console.log('getMenu', data)
      dispatch(setMenus(data))
      const routes = generatesRoutes(data)//动态创建的路由表
      const myRoutes = [...initRoutes];
      myRoutes[0].children = routes;
      myRoutes[0].children[0].index = true;

      const routeList = createBrowserRouter(myRoutes)
      setRoutes(routeList);
    }
    loadData()
  }, [])

  if (routes) {
    return (
      // Suspense作用是当子组件是懒加载时，显示fallback中的内容，当子组件加载完成后，显示子组件
      <Suspense fallback={<div>loading..</div>}>
        <RouterProvider router={routes} />
      </Suspense>
    );
  } else {
    return <div>loading...</div>;
  }

}

export default App;
