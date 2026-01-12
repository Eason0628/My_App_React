import { RouterProvider } from "react-router-dom";
import router from "./router";
import './mock'
import { generatesRoutes } from "./util/generatesRoutes";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const { menuList } = useSelector((state: any) => state.authSlice);
  
  useEffect(() => {
     const routes = generatesRoutes(menuList);
     console.log('routes',routes)
  }, [menuList])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
