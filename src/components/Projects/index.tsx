import back from '../../assets/back.svg'
import uw from '../../assets/uw.svg'
import sawara from '../../assets/sawara.svg'
import glucose from '../../assets/glucose.svg'
import './index.css'
export const Projects = (props:any) => {
const {setIsProject, setIsHomePage} = props;

    return(

        <div className='prj-wrapper'>
        <div className='back-arrow'> <img onClick={()=>{
        setIsHomePage(true)
        setIsProject(false)
        }}
        src={back}/></div>
         <div className="project">
             <div className='project-text'>
             <p>Check my  <a href="https://www.github.com/jenawen/">GitHub</a> for more projects and things I’m currently working on!</p>

             <p className='proj-cont'>
                <img src={uw}/>
                <div className='proj'> 
                
                <div className='proj-title'>Underwriting (RISK-246) </div>
                An underwriting application that allows the user to create a custom 
                credit line for a specific credit card. This was one section of a 
                larger internal project titled RISK-246. The purpose of the project 
                was to create, edit, and manage credit card campaigns more efficiently. 
                I was in charge of the Underwriting portion of the project. This 
                project was an internal application. Contact me if you would like to 
                know more about it.
                <div>Technologies used: React, TypeScript, Jest</div>
                </div>
             </p>

             <p className='proj-cont'>
             <img src={glucose}/>

                <div className='proj'> 
                
                <div className='proj-title'> 
                <a href="https://github.com/jenawen/glucose">

                Glucose Level Dashboard 
                </a>
                </div>
            
             When my partner was suddenly diagnosed with diabetes, we had to make 
             immediate lifestyle changes. Along with eating healthier, we also had 
             to take readings for his blood sugar three times everyday until he saw 
             his doctor again. I logged his glucose levels for each reading for a month
              and made a dashboard to visually see his progress. I made the dashboard 
              in hopes of seeing his glucose levels trend downwards myself. For a 
              month, I saw his glucose levels fall to a sustainable number and level 
              out at a normal rate. I still maintain data for his readings to this day. 
              I add new data when I can.
              <div>Technologies used: Streamlit, Python, Firestore, Excel</div>
                </div>

             </p>
             <p className='proj-cont'>
             <img src={sawara}/>

             <div className='proj'> 


             <div className='proj-title'>
                
                <a href="https://sawara.vercel.app/">

                Sawara's Portfolio 
                </a>
                
                </div>
             A portfolio site for a UX Designer to showcase her projects. I was commissioned 
             by my friend to build a website for her that she designed using Figma. Being an 
             experienced designer, my friend was able to guide me through Figma and it's 
             capabilities. Building this website exposed me more to tools designers use, 
             which motivated me to try and use Figma for future applications
             
             <div>Technologies used: React, TypeScript, Jest</div>
             </div>
             </p>


             </div>
         </div>
         </div>

    )
}