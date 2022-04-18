import { DiReact } from 'react-icons/di'
import {DiJsBadge} from 'react-icons/di'
import {DiHtml5} from 'react-icons/di'
import { SiExpress } from 'react-icons/si'
import {DiNodejsSmall} from 'react-icons/di'
import {DiGithubBadge} from 'react-icons/di'
import {DiBootstrap} from 'react-icons/di'
import {DiCss3Full} from 'react-icons/di'
import {DiGit} from 'react-icons/di'
import {DiMysql} from 'react-icons/di'
import {DiNpm} from 'react-icons/di'
import {DiTerminal} from 'react-icons/di'
import {DiVisualstudio} from 'react-icons/di'
import {DiPhotoshop} from 'react-icons/di'
import {DiHeroku} from 'react-icons/di'

import {MdDeviceHub} from 'react-icons/md'
import classes from './technologies.module.css'

function Technologies(){
    return (
        <section className={classes.technologiessection} id="technologies">
            <div className={classes.projectstitle}><h2>technologies</h2><MdDeviceHub className={classes.icon}/></div>
            <h3>These are the main technologies and tools i use for developing</h3>

            <div className={classes.iconescontainer}>
            <div className={classes.iconediv}>
                <DiReact className={classes.react}/>
                <h4>React js</h4>
            </div>
            <div className={classes.iconediv}>
                <DiJsBadge className={classes.js}/>
                <h4>java script</h4>
            </div>
            <div className={classes.iconediv}>
                <DiHtml5 className={classes.html}/>
                <h4>html 5</h4>
            </div>
            <div className={classes.iconediv}>
                <SiExpress className={classes.express}/>
                <h4>express js</h4>
            </div>
            <div className={classes.iconediv}>
                <DiNodejsSmall className={classes.nodejs}/>
                <h4>Node js</h4>
            </div>
            <div className={classes.iconediv}>
                <DiGithubBadge className={classes.github}/>
                <h4>Git hub</h4>
            </div>
            <div className={classes.iconediv}>
                <DiBootstrap className={classes.bootsrap}/>
                <h4>Bootstrap</h4>
            </div>
            <div className={classes.iconediv}>
                <DiGit className={classes.git}/>
                <h4>Git</h4>
            </div>
            <div className={classes.iconediv}>
                <DiCss3Full className={classes.css}/>
                <h4>Css</h4>
            </div>
            <div className={classes.iconediv}>
                <DiMysql className={classes.mysql}/>
                <h4>Mysql</h4>
            </div>
            <div className={classes.iconediv}>
                <DiNpm className={classes.npm}/>
                <h4>npm</h4>
            </div>
            <div className={classes.iconediv}>
                <DiTerminal className={classes.terminal}/>
                <h4>Terminal</h4>
            </div>
            <div className={classes.iconediv}>
                <DiVisualstudio className={classes.vscode}/>
                <h4>Vs code</h4>
            </div>
            <div className={classes.iconediv}>
                <DiPhotoshop className={classes.ps}/>
                <h4>Photoshop</h4>
            </div>
            </div>
        </section>
    )
}

export default Technologies