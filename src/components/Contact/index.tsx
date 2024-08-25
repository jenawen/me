import back from '../../assets/back.svg'
import './index.css'

export const Contact = (props:any) => {
const {setIsHomePage, setIsContact} = props
    return(
        <div className="contact-wrapper">
 <div className='back-arrow'> <img onClick={()=>{
        setIsHomePage(true)
        setIsContact(false)
        }}
        src={back}/></div>
<div className="contact-cont">

    <p>Contact me at jenawen00@gmail.com for questions or a quick chat.</p>
    <p>You can also check out my resume. </p>
    <p>Visit my <a href='https://github.com/jenawen'>GitHub</a> for projects I’m working on.</p>
    <p>Connect with me on <a href="https://www.linkedin.com/in/jena-adkins/">LinkedIn</a> to stay in touch!</p>

</div>

        </div>
    )

}