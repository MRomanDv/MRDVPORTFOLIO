import { Link } from 'react-router-dom'
import classes from './navbar.module.css'


function Navbar(){
    return (
        <div className={classes.navcontainer}>
            <div className={classes.portfoliotitle}>
                <p>MRDV Portfolio</p>
            </div>
            <div className={classes.links}>
                <ul>
                    <p >Projects</p>
                    <p>Technologies</p>
                </ul>
            </div>
        </div>
    )
}

export default Navbar