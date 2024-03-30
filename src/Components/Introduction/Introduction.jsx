import './Introduction.css'
export default function Introduction() {
    return <>
        <section id='intro'>
            <div className="introContainer">
                <div className='introLeftPanel'>
                    <div className='introHeadings'>
                        <div className="introHeading">
                            <p>Front End <br />React Developer</p>
                        </div>
                        <div className="introSubTitleHeading">
                            <p>Hi,I am Pratiksha.<br />
                                A dyanamic frontend react developer <br />
                                based in Pune,India.
                            </p>
                        </div>
                    </div>
                    <div className='introSelfImage'>
                        <img src="../assets/naruto.jpg" />
                    </div>
                </div>
                <div className="introTechstack">
                    <ul> <li>Tech stack :  </li>
                        <li>React | </li>
                        <li>HTML | </li>
                        <li>CSS | </li>
                        <li>Typescript | </li>
                        <li>c# | </li>
                    </ul>
                </div>
            </div >
        </section>
    </>
}