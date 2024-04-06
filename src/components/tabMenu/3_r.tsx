import { useState } from "react";
import cx from "./cx"
import data from "./data";

const TabItem = (
  {
    id,
    title,
    current,
    description,
    toggle
  }: {
    id: string,
    title: string,
    current: boolean,
    description: string,
    toggle: () => void
  }
) => {


  return (
    <li className={cx('item', { current })} key={id} onClick={toggle}>
      <div className={cx('tab')}>{title}</div>
      <div className={cx('description')}>{description}</div>
    </li>
  )
}



const TabMenu3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id)
  const toggleItem = (id: string) => () => {
    setCurrentId(id)
  }

  return (
    <>
      <h3>#3.React <sub>make like accordion</sub></h3>
      <ul className={cx('container', 'tabMenu3')}>
        {data.map(d => (
          <TabItem {...d} key={d.id} current={currentId === d.id} toggle={toggleItem(d.id)} />
        ))}
      </ul>
    </>
  )
}

export default TabMenu3;