
import "./index.css"
import me from '../../assets/homesvg.svg'
import loc from '../../assets/location.svg'
import { useState } from "react"
import { About } from "../About"
import { Projects } from "../Projects"
export const HomePage = () => {
    const [isHomePage, setIsHomePage] = useState(true)
    const [isAbout, setIsAbout] = useState(false)
    const [isProject, setIsProject] = useState(false)
    const [isContact, setIsContact] = useState(false)

    return(
        <>
            {isHomePage ? (<>
            <div className="home"> 
                <img src={me}/>
                <div className="title"> My name is Jena.</div>
        
                <div className="current"><img src={loc} className="locicon"/>Credit One Bank - Operations</div>
                <div className="desc">database management, content management systems, and customer support services </div>
                <div className="links">
                    <div className="linky" onClick={()=>{
                        setIsHomePage(false)
                        setIsAbout(true)
                    }}>about</div>
                    <div className="linky" onClick={()=>{
                        setIsHomePage(false)
                        setIsProject(true)
                    }}>projects</div>
                    <div className="linky">contact</div>
                </div>
            </div>
        </>) : isAbout ? (<><About setIsAbout={setIsAbout} setIsHomePage={setIsHomePage}/></>) 
             : isProject ? (<Projects setIsProject={setIsProject} setIsHomePage={setIsHomePage}/>) : (<></>)}
    </>
    )
}