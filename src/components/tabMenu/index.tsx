
import TabMenu1 from './1_r'
import TabMenu2 from './2_r'
import TabMenu3 from './3_r'
import TabMenu4 from './4_r'
import cx from './cx'

const TabMenus = () =>{
  return (
    <div className = {cx('TabMenus')}>
      <h2>Tab Menu</h2>
      <TabMenu1/>
      <TabMenu2/>
      <TabMenu3/>
      <TabMenu4/>
    </div>

  )
}
export default TabMenus