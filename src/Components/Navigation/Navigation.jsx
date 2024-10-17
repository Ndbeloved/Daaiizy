import { Link } from "react-router-dom"
import "./Navigation.css"
import { FaBarsStaggered } from "react-icons/fa6"

function Navigation({ setIsMenuOpen }) {
    return (
        <nav>
            <div className= "logo">
                <Link to={'/'}>
                    DAISY
                </Link>
            </div>


            <div className="menu">
                <FaBarsStaggered onClick={()=> setIsMenuOpen(true)} />
            </div>
        </nav>
    )
}

export default Navigation