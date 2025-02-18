import React from "react";

const Subscribe =()=>{
    
    return(
        <section className="subscribe">
            <div className="container">
                <div className="subs row justify-content-between bg-white">
                    <h3 className="text-dark col-md-5 col-11 m-auto pb-2">See My Projects At Once & Leave Here Your Email Address</h3>
                    <div className="email-submit row justify-content-between col-md-6 col-11 m-auto">
                        <input type="email" placeholder="Email Address" className="col-8 "/>
                        <button type="submit" className="col-4">submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Subscribe