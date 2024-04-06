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



const TabMenu1 = () => {
  const [currentId,setCurrentId] = useState<string|null>(data[0].id)
  const toggleItem = (id:string)=>()=>{
    setCurrentId(id)
  }

  const currentData = data.find(d=>(d.id===currentId))
  return (
    <>
      <h3>#1.React <sub>making width html</sub></h3>
      <div className={cx('container')}>
        <ul className={cx('tabList')}>
        {data.map(d => (
          <TabItem {...d} key={d.id} current = {currentId === d.id} toggle={toggleItem(d.id)}/>
        ))}
        </ul>
      { currentData? <div className={cx('description')}>{currentData.description}</div>:null}
      </div>
    </>
  )
}

export default TabMenu1;