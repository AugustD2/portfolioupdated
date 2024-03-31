import './Introduction.css'
export default function Introduction() {
    const handleDownload = () => {
        const resumePath = process.env.PUBLIC_URL + '/Pratiksha_React.pdf';
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
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
                        <button className='introResumeDownload' onClick={handleDownload}> Download Resume </button>

                    </div>
                    <div className='introSelfImage'>
                        <img src="../assets/imgNew.jpg" />
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