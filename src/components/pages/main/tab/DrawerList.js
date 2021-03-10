import Drawer from './Drawer';
import Footer from '../Footer';
import { drawerData } from '../../../../data/data';

const DrawerList = () => {
  return (
      <div>
        <Drawer title={drawerData.intro}/>
        <Drawer title={drawerData.program}/>
        <Drawer title={drawerData.artist}/>
        <Drawer title={drawerData.exhib}/>
        <Drawer title={drawerData.msg}/>
        <Footer/>
      </div>
  )
}
export default DrawerList;