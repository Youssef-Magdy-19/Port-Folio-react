
import img1 from "../images/project1.io.png"
import img2 from "../images/project2.io.png"
import img3 from "../images/project3.io.png"
import img4 from "../images/project4.png"
import img5 from "../images/project5.io.png"
import img6 from "../images/project6.io.png"
import image from "../images/color-sharp2.png"
import {  Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from "react-on-screen"

const Projects = ()=>{
    const projects = [
        {
            title : "Laptops Company",
            describetion : "HTML & CSS",
            image : img1,
            url : "https://youssef-magdy-19.github.io/OSTORA-Company-project1-/"
        },
        {
            title : "Online Shopping",
            describetion : "HTML & BootStrap CSS & JS",
            image : img5,
            url : "https://youssef-magdy-19.github.io/Project-4-JS/"
        },
        {
            title : "Online Shopping",
            describetion : "HTML5 & CSS3",
            image : img2,
            url : "https://youssef-magdy-19.github.io/project2-online-shopping/"
        },
        {
            title : "Online Coffee",
            describetion : "HTML & CSS",
            image : img3,
            
            url : "https://youssef-magdy-19.github.io/ostora-coffee/"
        },
        {
            title : "Coffee Shop",
            describetion : "HTML & BootStrap CSS",
            image : img4,
            url : "https://youssef-magdy-19.github.io/project-3-Coffee-Shop-/"
        },
        {
            title : "Markting",
            describetion : "HTML & BootStrap CSS & JS",
            image : img6,
            url : "https://youssef-magdy-19.github.io/Project-4-JS/"
        },
    ]

    return(
        <section className="container" id="projects" >
            <div className=" my-projects">
                <TrackVisibility>
                {({isVisible}) =>
                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <div className="info text-center">
                            <h2>My Projects</h2>
                            <p>I'm Youssef. I'm Engeneering. I live in cairo. This is 10th Project in React Dev.</p>
                        </div>
                    </div>}
                </TrackVisibility>
                <Tab.Container className="projects-tabs btns-section text-center " defaultActiveKey="first">
                    <Nav variant="pills"  className="nav-pills mb-3 justify-content-center align-items-center">
                        <Nav.Item className="nav-item btn1-section">
                            <Nav.Link eventKey="first" className="link-section first">1 st Section</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item btn2-section">
                            <Nav.Link eventKey="second" className="link-section w-100" >2nd Section</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item  btn3-section">
                            <Nav.Link eventKey="third"className="link-section third">3rd Section</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {/* this because  importannnntt  => <Tab.Content>*/}
                    <Tab.Content id="slideInUp" > 
                    <Tab.Pane eventKey="first" className="content-btn1">
                        <div className="projects text-center row">
                            {
                            projects.map((project) => {
                                return (
                                    <div className="space col-xl-3 col-lg-4 col-md-6 col-12">
                                        <div className="project" >
                                            <div className="image w-100">
                                                <img src={project.image} alt="" className="w-100" />
                                                <div className="overlay ">
                                                    <h3>{project.title}</h3>
                                                    <p>{project.describetion}</p>
                                                </div>
                                            </div>
                                            <a target="blank" href={project.url}>Visit Website <i class="fa-solid fa-arrow-right text-white ms-1"></i></a>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" className="content-btn2 bg-warning"></Tab.Pane>
                        <Tab.Pane eventKey="third" className="content-btn3">
                            <p className="text-center">I'm Youssef. I'm Engeneering. I live in cairo. This is 10th Project in React Dev .</p>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
            <img src={image} alt="" className="background-image-right"/>
        </section>
    )
}
export default Projects