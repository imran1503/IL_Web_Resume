import React from "react";
import '../Components/AboutMe.css'
function aboutMe(){
    return(
        <div className="aboutMe">
            <div className="titleRow" >
                <h1>About Me</h1>
            </div>
            <div>
                <hr class="separator" />
            </div>
            <div className="descRow">

                <table>
                    <tr>
                        <td className="AMCell">
                            <p>
                                <strong>
                                During my time at Carleton University, where I successfully completed my degree in Software Engineering amid the challenges posed by the COVID era, I honed a diverse set of skills: <br/>
                                <br/>
                                - Academic Excellence: Showcased strong theoretical foundation through successful completion of the Software Engineering degree.<br/>
                                - Programming Proficiency: Adept in Java and Python, with a solid understanding of algorithmic complexities and modern software design principles.<br/>
                                - Adaptability: Thrived in the challenges of remote learning during COVID-19, honing adaptability and problem-solving skills.<br/>
                                - Open-Source Contributions: Actively engaged in impactful open-source projects, collaborating with diverse teams to deliver tangible results.<br/>
                                - Web Technologies: Explored and mastered web development technologies, contributing to open-source initiatives focused on enhancing user experiences.<br/>
                                - Proactive Learner: Committed to continuous learning, staying abreast of emerging technologies to remain at the forefront of the dynamic tech landscape.<br/>
                                <br/>
                                As I transition into the professional sphere, I bring a potent combination of technical prowess, resilience, and a proactive approach to learning, making me an ideal candidate for roles that demand versatility and innovation.<br/>
                                </strong>
                            </p>
                        </td>

                        <td>
                            <img className="descRowImg" src ='/images/IL-Profile.png' alt='portrait alternate'/>
                        </td>
                    </tr>
                </table>



            </div>
        </div>
    )
}

export default aboutMe;