import img7 from '../imgs/fd.png'
import img6 from '../imgs/img6.png'
import img5 from '../imgs/img5.png'
import img4 from '../imgs/img4.png'
import img3 from '../imgs/cookit.png'
import img1 from '../imgs/projectmrdv1.png'
import img2 from '../imgs/pictura.png'
import {FaProjectDiagram} from 'react-icons/fa'
import classes from './projects.module.css'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { motion,useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'


function Projects(){
    const {ref, inView} = useInView()
    const opacity = useAnimation()
    useEffect(()=>{
        if(inView){
            opacity.start({
                opacity:1,
                transition:{type:'spring', duration:4 } 
            })
        }
        if(!inView){
            opacity.start({opacity:0}) 
        }
    },[inView])

    const redirectCookIt = ()=>{
        window.open("https://recipe-reactjs-app.herokuapp.com/", '_blank')
    }

    const redirectTrendSeries = ()=>{
        window.open("https://tvseriesapi.herokuapp.com/", '_blank')
    }

    const redirectEms = ()=>{
        window.open("https://emplyeemanagementfrontend.herokuapp.com/", '_blank')
    }

    const redirectPictura = ()=>{
        window.open("https://picturaws.herokuapp.com/", '_blank')
    }

    const redirectNewsDaily = ()=>{
        window.open("https://newsdailyapi.herokuapp.com/", '_blank')
    }

    const redirectSfc = ()=>{
        window.open("https://scificulture.herokuapp.com/", '_blank')
    }

    const redirectFD = ()=>{
        window.open("https://fashiondealerws.herokuapp.com/", '_blank')
    }
    return (
        <section className={classes.projectssection} id="projects">
            <motion.div ref={ref} animate={opacity} className={classes.projectstitle}><h2>Projects</h2><FaProjectDiagram className={classes.icon}/></motion.div>
            <div className={classes.cardscontainer}>
    
                <div className={classes.card}>
                    <img src={img3} alt="" onClick={redirectCookIt}/>
                    <h3>Project name / cook it</h3>
                    <p>Description : React js app, this app renders an api,
                        you can search for any kind of food you like , and by clicking
                        on each card the app renders instructions for the recipe as well as a breef summary.
                    </p>
                    <ul>
                        <li>React js</li>
                        <li>fetch api</li>
                        <li>css animations</li>
                        <li>Media queries/Fully Responsive</li>
                        <li>npm packages</li>
                        <li>git/git-hub rep</li>
                    </ul>
                </div>

                <div className={classes.card}>
                    <img src={img1} alt="" onClick={redirectTrendSeries} />
                    <h3>Project name / Trend Tv Series</h3>
                    <p>Description : Most popular Streaming series updated  
                        every week by calling an api , you must log in/sign up
                        to enter, this website also contains
                        a match game coded in javascript.
                    </p>
                    <ul>
                        <li>Node js</li>
                        <li>express</li>
                        <li>MYSQL database/workbench</li>
                        <li>fetch api</li>
                        <li>OOP</li>
                        <li>jwt auth</li>
                        <li>js animations</li>
                        <li>css animations</li>
                        <li>ejs view engine</li>
                        <li>Media queries/Fully Responsive</li>
                        <li>npm packages</li>
                        <li>git/git-hub rep</li>
                    </ul>
                </div>

                <div className={classes.card}>
                    <img src={img4} alt="" onClick={redirectEms}/>
                    <h3>Project name / Employee Management System</h3>
                    <p>Description : React js app, in this project you can
                        register an employee (name/age/wage/city/position) and
                        display all the employees in the browser, you can update the
                        age, wage and position as well.
                    </p>
                    <ul>
                        <li>React js</li>
                        <li>Node js</li>
                        <li>express</li>
                        <li>MYSQL database/workbench</li>
                        <li>css animations</li>
                        <li>Media queries/Fully Responsive</li>
                        <li>npm packages</li>
                        <li>git/git-hub rep</li>
                    </ul>
                </div>

                <div className={classes.card}>
                    <img src={img2} alt="" onClick={redirectPictura}/>
                    <h3>Project name / Pictura</h3>
                    <p>Description : Website about iconic painters.
                    </p>
                    <ul>
                        <li>Node js</li>
                        <li>express</li>
                        <li>MYSQL database/workbench</li>
                        <li>Bootstrap</li>
                        <li>jwt auth/login/sign up</li>
                        <li>js animations</li>
                        <li>css animations</li>
                        <li>ejs view engine</li>
                        <li>Media queries/Fully Responsive</li>
                        <li>npm packages</li>
                        <li>git/git-hub rep</li>
                    </ul>
                </div>


                <div className={classes.card}>
                    <img src={img5} alt="" onClick={redirectSfc} />
                    <h3>Project name / Sci-fi culture</h3>
                    <p>Description : This website is about sci-fi,
                         contains a lot of cool css and js animation,
                         you can create an account/login/sign up.
                    </p>
                    <ul>
                        <li>Node js</li>
                        <li>express</li>
                        <li>MYSQL database/workbench</li>
                        <li>js animations</li>
                        <li>css animations</li>
                        <li>ejs view engine</li>
                        <li>Media queries/Fully Responsive</li>
                        <li>npm packages</li>
                        <li>git/git-hub rep</li>
                    </ul>
                </div>

                <div className={classes.card} onClick={redirectNewsDaily}>
                    <img src={img6} alt="" />
                    <h3>Project name / News Daily</h3>
                    <p>Description : Get the lastest trending news, this projects renders
                        an api from cnbc, by clicking on each new it sends to cnbc official site.
                    </p>
                    <ul>
                        <li>Node js</li>
                        <li>express</li>
                        <li>MYSQL database/workbench</li>
                        <li>fetch api</li>
                        <li>css animations</li>
                        <li>ejs view engine</li>
                        <li>Media queries/Fully Responsive</li>
                        <li>npm packages</li>
                        <li>git/git-hub rep</li>
                    </ul>
                </div>

                <div className={classes.card}>
                    
                    <img src={img7} alt="" onClick={redirectFD}/>
                   
                    <h3>Project name / Fashion Dealer</h3>
                    <p>Description : Blog about fashion brands.
                    </p>
                    <ul>
                        <li>Node js</li>
                        <li>express</li>
                        <li>MYSQL database/workbench</li>
                        <li>js animations</li>
                        <li>css animations</li>
                        <li>ejs view engine</li>
                        <li>Media queries/Fully Responsive</li>
                        <li>npm packages</li>
                        <li>git/git-hub rep</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Projects