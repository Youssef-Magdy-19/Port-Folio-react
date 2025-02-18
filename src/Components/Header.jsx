
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';


export const Header = () => {

  const [ActiveLink , setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const updateActiveLink = (value) =>{
        setActiveLink(value)
    }

    const sections = document.querySelectorAll("section")
    const links = document.querySelectorAll("header nav a")
    
    
    window.onscroll = ()=>{
      sections.forEach((sec)=>{
        let top = window.scrollY
        let offset = sec.offset - 150
        let Height = sec.offsetHeight
        let id = sec.getAttribute("id")

        if(top >= offset && top < offset + Height ){
          links.forEach((link)=>{
              link.classList.remove("active")
              document.querySelector("header nav a [href *=" + id + "]").classList.add("active")
          })
        }
      })
    }
    
  return (

      <Navbar expand="md" className={scrolled ? "scrolled" : "navbar"} >
          <header className="header d-flex justify-content-between p-0 m-0">
            <Navbar.Brand href="/">
            <h2 class="navbar-brand text-white" href="/">PortFolio</h2>
            </Navbar.Brand>
            <div className="d-flex justify-content-between">
              
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto me-3  mb-lg-0">
                    
                  <li class="nav-item">
                    <Nav.Link href="#home" class="ms-2 p-3" className={ActiveLink === "home" ? "active nav-link" : "nav-link"} aria-current="page" onClick={()=>{updateActiveLink("home") }}>Home</Nav.Link>
                  </li>
                  <li class="nav-item">
                    <Nav.Link href="#skills"  className={ActiveLink === "skills" ? "active nav-link" : "nav-link"} class="ms-2 p-3" onClick={()=>{updateActiveLink("skills")}}>Skills</Nav.Link>
                  </li>
                  <li class="nav-item">
                    <Nav.Link href="#projects"  className={ActiveLink === "projects" ? "active nav-link" : "nav-link"} class="ms-2 p-3"  onClick={()=>{updateActiveLink("projects")}}>Projects</Nav.Link>
                  </li>
                  </Nav>
                  <div className="d-flex">
                    
                    <div className="icons me-3 d-flex align-items-center">
                      <Nav.Link target="blank" href="https://www.facebook.com/profile.php?id=100053406365909&locale=ar_AR"><i class="fa-brands fa-facebook-f ms-1 me-1"></i></Nav.Link>                                     
                      <Nav.Link target="blank" href="https://www.linkedin.com/in/ana-youssef-48141b337/"><i class="fa-brands fa-linkedin-in ms-1 me-1"></i></Nav.Link>
                      <Nav.Link href="#"><i class="fa-brands fa-instagram ms-1 me-1"></i></Nav.Link> 
                    </div>
                    <HashLink to='#connect'>
                        <button className="connect ps-3 pe-3 pt-2 pb-2"><span>Let’s Connect</span></button>
                    </HashLink>

                  </div>
              </Navbar.Collapse>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white open-close h-50 ">
                  <span className="navbar-toggler-icon bg-white "></span>
              </Navbar.Toggle>
            </div>
          </header>
      </Navbar>

  )
}

export default Header;