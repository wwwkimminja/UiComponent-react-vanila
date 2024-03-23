"use client"
import React from 'react'
import { ChildRoute, gnbRootList, isParentRoute, ParentRoute, ROUTE, ROUTE_PATH, routes } from './routes'
import Link from 'next/link'
import classNames from 'classnames'
import { useParams } from 'next/navigation'

const ParentGnbItem = ({ route: { link, name, children }, currentPath }: { route: ParentRoute; currentPath: ROUTE_PATH }) => {
  const open = children.includes(currentPath);

  return (
    <li className={classNames('parent', `items-${children.length}`, { open })}>
      <Link href={link}>{name}</Link>
      <ul className='subRoutes'>
        {children.map(r => {
          const route = routes[r]
          return <GnbItem route={route} key={route.key} currentPath={currentPath} />
        })}
      </ul>
    </li>

  )

}
const ChildGnbItem = ({ route: { link, name }, currentPath }: { route: ChildRoute; currentPath: ROUTE_PATH }) => {
  return (
    <li className={classNames({active:link===currentPath})}>
      <Link href={link}>{name}</Link>
    </li>

  )
}
const GnbItem = ({ route, currentPath }: { route: ROUTE; currentPath: ROUTE_PATH }) => {
  if (isParentRoute(route)) return <ParentGnbItem route={route} currentPath={currentPath} />
  return <ChildGnbItem route={route} currentPath={currentPath} />

}

const Gnb = () => {
  const { item = [] } = useParams();
  const currentPath = ['', ...item].join('/') as ROUTE_PATH
  return (
    <aside>
      <h1>
       <Link href='/'>UI Component <sub>FEmj</sub></Link> 
      </h1>
      <ul className='mainRoutes'>
        {gnbRootList.map(r => <GnbItem route={r} key={r.key} currentPath={currentPath} />)}
      </ul>
    </aside>
  )
}

export default Gnb
