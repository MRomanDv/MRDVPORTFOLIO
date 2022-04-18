import { useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView} from 'react-intersection-observer'
import classes from './headerInfo.module.css'

function HeaderInfo(){
    const {ref, inView} = useInView()
    const animation = useAnimation()

    useEffect(()=>{
        if(inView){
            animation.start({
                x:0,
                transition:{type:'spring', duration:2 , bounce:0.3} 
            })
        }
        if(!inView){
            animation.start({x:'-100vw'})
        }
    },[inView])

    return (
        <motion.div ref={ref} className={classes.headerinfocontainer} animate={animation}>
                <div className={classes.name}>
                <h1 data-text="Miguel&nbsp;Román">Miguel Román</h1>
                <span>Fullstack Developer</span>
                <div className={classes.infoinjson}>
                <h3>"contactMe" : </h3>
                <p>&#123;"currentLocation" : "Mexico city/Querétaro",</p>
                <p>"email" : "miguelromn@hotmail.com",</p>
                <p>"tel" : " + 52 442 434 13 84",</p>
                <p>"age" : 26 &#125;</p>
                </div>
                </div>

                <div className={classes.descriptioncontainer}>
                     <p>" Highly passionated about web development,coding and programming has become 
                        a part of my daily life,to me consistency and passion for what i do is key, 
                        i love learning everyday about new technologies
                        and mastering the tech that i already have learned, i love the front end field as well as the backend "</p>
                </div>
        </motion.div>
    )
}

export default HeaderInfo