import { RouterProvider } from "react-router-dom";
import { initRoutes } from "./router";
import './mock'
import { generatesRoutes } from "./util/generatesRoutes";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import { useState } from "react";
function App() {
  const { menuList } = useSelector((state: any) => state.authSlice);
  const [routes, setRoutes] = useState<any>(null);

  useEffect(() => {
    let routeList = generatesRoutes(menuList);
    let routes = [...initRoutes]
    routes[0].children = routeList
    if (routes[0].children[0]) {
      // 第一个路由的子路由设置为默认路由
      routes[0].children[0].index = true
    }

    // console.log('Routes is initialized', routes)
    const browserRouters = createBrowserRouter(routes);
    setRoutes(browserRouters);
  }, [menuList])

  if (routes) {
    return (
      <RouterProvider router={routes} />
    );
  } else {
    return <div>loading</div>;
  }

}

export default App;
