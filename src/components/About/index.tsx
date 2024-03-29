import './index.css'
import back from '../../assets/back.svg'
export const About = (props:any) => {
const {setIsAbout, setIsHomePage} = props;
    return(
        <div className='about-wrapper'>
       <div className='back-arrow'> <img onClick={()=>{
        setIsHomePage(true)
        setIsAbout(false)
       }}
       src={back}/></div>
        <div className="about">
            <div className='about-text'>

            <p>
                Hi! I'm Jena. I’m a Workforce Analyst II. I help plan and manage business 
                strategies that best execute department and company goals. I use my 
                extensive technical knowledge to optimize workforce effectiveness and 
                implement solutions as efficiently as possible. I work extensively with 
                vendor management, NOC and incident reporting, and call metrics/analytics.
            </p>
            <p>
                My technical background revolves around software engineering and 
                development, including data structures and algorithms, statistical
                analysis, and UI/UX design. I first started my career was a software 
                engineer. I love web development and still dabble in it 
                in my free time, and often use my technical skills to help me in 
                my current role.
            </p>
            <p>
                Oh, and I also love cats and cute cafes! If I'm not working, 
                I'm watching cartoons with my cats or grabbing a jasmine milk tea 
                with friends. :)
            </p>
            </div>
        </div>
        </div>
    )
}