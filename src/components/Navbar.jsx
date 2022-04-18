import {MdDeviceHub} from 'react-icons/md'
import {FaProjectDiagram} from 'react-icons/fa'
import { HashLink as Link } from 'react-router-hash-link'
import classes from './navbar.module.css' 


function Navbar(){
    return (
        <div className={classes.navcontainer}>
            <div className={classes.portfoliotitle}>
                <p>MRDV Portfolio</p>
            </div>
            <div className={classes.links}>
                <ul>
                    <Link to="#projects" smooth>Projects <FaProjectDiagram className={classes.icon}/> </Link>
                    <Link to="#technologies" smooth>Technologies <MdDeviceHub className={classes.icon} /> </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar