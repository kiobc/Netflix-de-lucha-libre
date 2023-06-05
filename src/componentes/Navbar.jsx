import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
                <span>Inicio</span>
                <span>WWE</span>
                <span>AEW</span>
                <span>ROH</span>
                <span>Mi lista</span>
                </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src="https://th.bing.com/th/id/R.b62b5ea41d675ad646b8da931c65fdff?rik=fGGfU4PQmEmmbg&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1789%2f4287%2fproducts%2fUS-WWE-Stone-Cold-Steve-Austin-_Logo-01A-Black_1024x1024.jpg%3fv%3d1571678894&ehk=zd9Ldb1cbcowBG8tR%2baFfqapsgts3XT0D8jNNXWRT9g%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <ArrowDropDown className="icon"/>
                </div>

            </div>
    </div>
  )
}

export default Navbar