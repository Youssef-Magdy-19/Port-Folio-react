import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import img1 from "../images/90present.jpg"
import img2 from "../images/80present.jpg"
import img3 from "../images/95present.jpg"
import images from "../images/color-sharp.png"
const Skills = ()=>{
    const resposive = {
        superLargeDesktop:{
            breakpoint:{ max : 4000 , min :3000},
            items:5
        },
        desktop: {
            breakpoint :{ max : 3000 , min:994},
            items : 3
        },
        tablet :{
            breakpoint:{max : 994 , min :466},
            items: 2
        },
        mobile:{
            breakpoint: {max: 466 , min :0},
            items : 1
        }
    }
    return(
        <>
        <section className="container" id="skills">
            <div className="skills bg-dark text-center">
                <h2>Skills</h2>
                <p>You Can See My Skills Here Ya My Friend</p>
                <Carousel responsive={resposive} infinite={true} className="skill-slider">
                    <div className="item">
                        
                        <img src={img1} alt="" />
                        <h4 className="mt-2">HTML</h4>
                    </div>
                    <div className="item">
                        <img src={img3} alt="" />
                        <h4 className="mt-2">CSS</h4>
                    </div>
                    <div className="item">
                        <img src={img2} alt="" />
                        <h4 className="mt-2">Bootstrap</h4>
                    </div>
                    <div className="item">
                        <img src={img1} alt="" /> 
                        <h4 className="mt-2">Java Script</h4>
                    </div>
                    <div className="item">
                        <img src={img2} alt="" />
                        <h4 className="mt-2">React JS</h4>
                    </div>
                </Carousel>
            </div>
        </section>
        <img src={images} alt="" className="background" />
        </>
    )
}
export default Skills