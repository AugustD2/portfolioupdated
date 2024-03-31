import './ProjectsDone.css'
export default function ProjectsDone() {
    return <>
        <section id='projects'>
            <div className="projectsDoneContainer">
                <h5>Projects</h5>
                <div className='projectsDoneSummary'>
                    <div className='projectsDoneCards'>
                        <div className='projectsDoneCardsLeftPanel'>
                            <div className='projectsDoneCardsName' >Recruitment Portal</div>
                            <div className='projectsDoneCardsDetails'>One stop recruitment portal <br />
                                <ul>
                                    <li> Collaborated closely with UX designers to transform wireframes into responsive web pages.<br /></li>
                                    <li> Developed reusable and clean components enhancing the user experience and interface.<br /></li>
                                    <li> Utilized Graph API to implement a people picker functionality, executing API calls both on the front-end and back-end.<br /></li>
                                    <li> Utilized the Axios library for API calling, and implemented methods using async and await for efficient handling of asynchronous operations.<br /> </li></ul>
                            </div>
                            <div className='projectsDoneCardsTechStack'>React TypeScript | HTML | CSS </div>
                        </div>
                    </div>  <div className='projectsDoneCards'>
                        <div className='projectsDoneCardsLeftPanel'>
                            <div className='projectsDoneCardsName'>Retail Site</div>
                            <div className='projectsDoneCardsDetails'>Order Processing System <br />
                                <ul>
                                    <li> Operated within an Agile development model.</li>
                                    <li> Automated data storage from Excel sheets to SQL database using Azure Logic Apps.</li>
                                    <li> Created APIs to retrieve data from databases and transmit it to the frontend, ensuring seamless data flow and integration.</li>
                                </ul>
                            </div>
                            <div className='projectsDoneCardsTechStack'>React Js | C# | Azure | HTML | CSS </div>
                        </div>
                    </div>  <div className='projectsDoneCards'>
                        <div className='projectsDoneCardsLeftPanel'>
                            <div className='projectsDoneCardsName'>Portfolio</div>
                            <div className='projectsDoneCardsDetails'>Record of work that showcase my skills and potential</div>
                            <div className='projectsDoneCardsTechStack'>React Js | HTML | CSS </div>
                            <div className='projectsDoneCardsLink'>
                                <a href='#' target='_blank'>Live</a>
                            </div>
                            <div className='projectsDoneCardsRightPanel'>
                                <img src="../assets/portfolioImage.jpg" />
                            </div>
                        </div>

                    </div>
                </div >
            </div >
        </section >

    </>
}