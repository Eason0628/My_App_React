// RouteObject是react提供的路由对象
import { RouteObject } from "react-router-dom";
import { componentMap } from "../router/routerMap";
interface MenuType {
    icon: string;
    key: string;
    label: string;
    children?: MenuType[]
}

export function generatesRoutes(menus: MenuType[]) {
    return menus.map((item: MenuType) => {
        // 如果有子菜单，不渲染组件
        let hasChildren = item.children && item.children.length > 0;
        let routeObj: RouteObject = {
            path: item.key,
            element: hasChildren ? null : <>{componentMap[item.key]}</>
        }
        
        if (item.children) {
            routeObj.children = generatesRoutes(item.children)
        }
        return routeObj;
    })
}