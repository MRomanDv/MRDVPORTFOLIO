import classes from './header.module.css'
import HeaderInfo from './HeaderInfo'
import Navbar from './Navbar'


function Header(){
    return(
        <section className={classes.header}>
            <Navbar />
            <HeaderInfo />
        </section>
    )
}

export default Header