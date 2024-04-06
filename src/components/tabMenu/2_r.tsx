import { useState } from "react";
import cx from "./cx"
import data from "./data";

const TabItem = (
  {
    id,
    title,
    current,
    toggle
  }: {
    id: string,
    title: string,
    current: boolean,
    toggle:()=>void
  }
) => {


  return (
    <li className={cx('tab',{current})} key={id} onClick={toggle}>
    {title}
    </li>
  )
  }



const TabMenu2 = () => {
  const [currentId,setCurrentId] = useState<string|null>(data[0].id)
  const toggleItem = (id:string)=>()=>{
    setCurrentId(id)
  }

  return (
    <>
      <h3>#2.React <sub>description hidden/show with css</sub></h3>
      <div className={cx('container','tabMenu2')}>
        <ul className={cx('tabList')}>
        {data.map(d => (
          <TabItem {...d} key={d.id} current = {currentId === d.id} toggle={toggleItem(d.id)}/>
        ))}
        </ul>
       {data.map(d =>(
        <div key={d.id} className={cx('description',{current:d.id ===currentId})}>{d.description}</div>
       ))}
      </div>
    </>
  )
}

export default TabMenu2;