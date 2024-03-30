import About from "../About/About";
import ContactMe from "../ContactMe/ContactMe";
import Introduction from "../Introduction/Introduction";
import NavBar from "../Navbar/NavBar";
import ProjectsDone from "../ProjectsDone/ProjectsDone";

export default function MainPage() {

    return <>
        <div className="mainContainer">
            <NavBar></NavBar>
            <Introduction></Introduction>
            <About></About>
            <ProjectsDone></ProjectsDone>
            <ContactMe></ContactMe>
        </div>
    </>

}