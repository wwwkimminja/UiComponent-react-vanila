import { useState } from "react"
import cx from "./cx"
import data from "./data"

const AccordionItem = ({ 
  id, 
  title, 
  description, 
  current, 
  toggleItem 
}: { 
  id: string, 
  title: string, 
  description: string, 
  current: boolean, 
  toggleItem: () => void 
}) => {

  return (
    <li className={cx('item', 'item3',{ current })} key={id}>
      <div className={cx('tab')} onClick={toggleItem}>{title}</div>
      <div className={cx('description')}>{description}</div> 
    </li>
  )
}

const Accordion3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id)
  const toggleItem = (id: string) => {
    setCurrentId(prev => prev === id ? null : id)
  }

  return (
    <>
      <h3>#3.React<sub>display accordion with css animation</sub></h3>
      <ul className={cx('container')}>
        {data.map(d => (
          <AccordionItem {...d} key={d.id} current={currentId === d.id} toggleItem={()=>toggleItem(d.id)} />

        ))}

      </ul>

    </>
  )
}

export default Accordion3