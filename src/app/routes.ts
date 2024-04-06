import Accordions from "@/components/accordion";
import TabMenus from "@/components/tabMenu";

const routePaths = ['/','/accordion','/tabMenu']as const ;
export type ROUTE_PATH = (typeof routePaths)[number];
type BaseRoute = {
  key:ROUTE_PATH
  link:ROUTE_PATH
  name:string
}
export type ParentRoute = BaseRoute & {
  children:ROUTE_PATH[]
}
export type ChildRoute = BaseRoute & {
  children:((props:unknown)=>JSX.Element)|null
}
export type ROUTE = ParentRoute |ChildRoute
export const routes:Record<ROUTE_PATH,ROUTE>= 
  {
    '/':{
      key: '/',
      link: '/',
      name:'ROOT',
      children: ['/accordion','/tabMenu']

    },
    '/accordion':{
      key: '/accordion',
      link: '/accordion',
      name:'Accordion',
      children: Accordions,
    },
    '/tabMenu':{
      key: '/tabMenu',
      link: '/tabMenu',
      name:'TabMenu',
      children:TabMenus
    },
    // '/test2/vanilla':{
    //   key: '/test2/vanilla',
    //   link: '/test2/vanilla',
    //   name:'Vanilla',
    //   children: Test2_Vanilla
    // },
    // '/test2/react':{
    //   key: '/test2/react',
    //   link: '/test2/react',
    //   name:'React',
    //   children: Test2_React
    // },
  }

  export const isParentRoute = (route:ROUTE):route is ParentRoute => Array.isArray(route.children) 

  export const gnbRootList = (routes['/']as ParentRoute).children.map(r=>routes[r])