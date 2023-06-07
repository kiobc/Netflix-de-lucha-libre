import React from 'react'
import './listaItem.scss'
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'

export default function ListaItem() {
  return (
    <div className='listaItem'>
        <img src="https://th.bing.com/th/id/R.af90d224c738702c6c9e18d7fd144bcf?rik=q%2bTASMIRzHw4ZA&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f4600000%2fWrestleMania-XXV-professional-wrestling-4696205-1280-1024.jpg&ehk=WDX0EaqnR2%2fNnr6e%2bh00eixi%2boAmtU185pvKTnTNcfI%3d&risl=&pid=ImgRaw&r=0" alt="" />
    
    <div className="itemInfo">
    <div className="iconos">
        <PlayArrow/>
        <Add/>
        <ThumbUpAltOutlined/>
        <ThumbDownOutlined/>
    </div>
    </div>
    </div>
  )
}
