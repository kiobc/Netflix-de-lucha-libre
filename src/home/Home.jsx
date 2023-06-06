import { AcUnit } from '@material-ui/icons'
import './home.scss'
import Navbar from '../componentes/navbar/Navbar';
import Featured from '../componentes/destacado/Destacado';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
<Featured />
    </div>
  )
}

export default Home