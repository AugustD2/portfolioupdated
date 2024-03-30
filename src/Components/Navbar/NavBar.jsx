import './NavBar.css'
export default function NavBar() {

    return <>
        <div className="navBarContainer">
            <h3>Pratiksha Patil</h3>
            <div className="linkToOtherComps">
                <ul>
                    <li>
                        <a href="#intro">Introduction</a>
                    </li>
                    <li>
                        <a href="#aboutMe">About Me</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
        </div>

    </>

}