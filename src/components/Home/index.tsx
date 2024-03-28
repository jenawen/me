import "./index.css"
import me from '../../assets/homesvg.svg'
export const HomePage = () => {

    return(
        <div className="home"> 
        
        <img src={me}/>
        <div className="title"> My name is Jena.</div>
        
        <div className="current">Credit One Bank - Operations</div>
        <div className="desc">database management, content management systems, and customer support services </div>
        <div className="links">
            <div>about</div>
            <div>projects</div>
            <div>contact</div>
        </div>
        </div>
    )
}