import Accordion1 from "./1_r"
import Accordion2 from "./2_r"
import Accordion3 from "./3_r"
import cx from "./cx"

const Accordions = () =>{

  return (
    <div className={cx('Accordions')}>
      <h1>Accordion</h1>
    <Accordion1/>
    <Accordion2/>
    <Accordion3/>
    </div>
  )
  
} 
export default Accordions