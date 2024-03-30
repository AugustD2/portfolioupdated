import './ContactMe.css'
export default function ContactMe() {
    return <>
        <section id='conatctMe'>
            <div className="contactMeConatiner">
                <div className="contactMeLeftPannel">
                    <div className="contactLeftPannelMeHeader">
                        <span>Drop me a message !</span>
                    </div>
                    <div className="contactMeForm">
                        <input type="text" placeholder="Your Name" /><br />
                        <input type="text" placeholder="Your Email" /><br />
                        <input type='text' placeholder="Your Message" /><br />
                        <button type="submit">Send</button>
                    </div>
                </div>
                <div className="contactMeRightPannel">
                    <div className="contactMeRightPannelHeader" >
                        <span>Contact Me</span>
                    </div>
                    <div className="contactMeSocialMediaLinks">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/pratiksha-patil-718b2a159/" target="_blank">LinkedIn</a></li>
                            <li><a href="https://github.com/AugustD2" target="_blank">GitHub</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
}