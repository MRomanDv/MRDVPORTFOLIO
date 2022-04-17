import classes from './headerInfo.module.css'

function HeaderInfo(){
    return (
        <div className={classes.headerinfocontainer}>
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
        </div>
    )
}

export default HeaderInfo