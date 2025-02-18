import React,{useState , useEffect} from "react";
import img from "../images/header-img.svg"
import 'animate.css';
import TrackVisibility from "react-on-screen"

const Home = ()=>{
    const [loopNum , setloopNum ] = useState(0)
    const [isDeleting , setisDeleting] = useState(false)
    const toRotate = ["Web Developer ." , "Front End ." , "Back End ."]
    const [text , settext] = useState("")
    const [delta , setdelta] = useState(300- Math.random()*100)
    const period = 2000

    useEffect(()=>{
        const tricker = setInterval(()=>{
            trick()
        },delta)

        return() =>{clearInterval(tricker)}
    },[text])
    const trick = ()=>{
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1)
        settext(updateText )

        if(isDeleting){
            setdelta(newdelta => newdelta/2)
        }
        if(!isDeleting && updateText === fullText){
            setisDeleting(true)
            setdelta(period)
        }else if(isDeleting && updateText === ""){
            setisDeleting(false)
            setloopNum(loopNum + 1)
            setdelta(500)
        }
    }
    return(
        <section id="home">
            <div className="container mt-5">
                <div className="home row justify-content-between">
                    <div className="infromation  col-xl-8 col-md-8 col-12">
                        <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <p className="welcome border-1 text-white d-inline-block">Welcome All In My Portfolio</p>
                                <h1 className="text-white">{`Hi! I'm Youssef Magdy Mohmmed ,`} <span className="wrap">{text}</span> </h1>
                                <p className="mb-5">Hello Everyone. I have 8 months of Experience in Web Develpoment .</p>
                                <a className="text-white d-inline link-form" href="#connect">let's connect <i class="fa-solid fa-arrow-right text-white ms-1"></i></a>
                            </div>}
                        </TrackVisibility>
                    </div>
                    <div className="move-photo mt-3 col-xl-4 col-md-4 col-12 text-center">
                        <img src={img} alt=""  width="350" height="380"/>  
                    </div>                  
                </div>
            </div>
        </section>
    )
}

export default Home
