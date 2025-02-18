import React , {useState} from "react";
import image from "../images/contact-img.svg"
const  Form = ()=>{
    const [userInfo,setuserInfo] = useState({
        fName : "",
        lName : "",
        email : "",
        phoneNo : "",
        message : ""
    })
    const [active , setactive] = useState(false)
    const send =()=>{
        if(userInfo.fName && userInfo.lName && userInfo.email && userInfo.phoneNo != ""){
            const btnSend = document.querySelector(".contact button")
            btnSend.innerHTML = "arrived"
            setactive(true)
            alert("Sent successfully")
        }else{
            alert("Please Enter Full Details")
        }
    }
    return(
        <section className="contact" id="connect">
            <div className="container  row justify-content-between">
                <div className="form-img col-md-6  col-12">
                    <img src={image} alt="" className="w-100"/>
                </div>
                <div className="form col-md-6  col-12">
                    <h2 className="mb-3">Get In Touch</h2>
                    <div className="name row">
                        <div className="space col-sm-6 col-12 w-50  p-0">
                            <input type="text" className="ps-2  " placeholder="First Name" value={userInfo.fName} onChange={(e)=> setuserInfo({...userInfo , fName:e.target.value})}/>
                        </div>
                        <div className="space col-sm-6 col-12 w-50  p-0">
                            <input type="text" className="ps-2 " placeholder="Last Name" value={userInfo.lName} onChange={(e)=> setuserInfo({...userInfo , lName:e.target.value})}/>
                        </div>
                    </div>
                    <div className=" row">
                    <div className="space col-sm-6 col-12 w-50  p-0">
                            <input type="email" className="ps-2" placeholder="Email Address"  value={userInfo.email} onChange={(e)=> setuserInfo({...userInfo , email:e.target.value})}/>
                        </div>
                        <div className="space col-sm-6 col-12 w-50  p-0">
                            <input type="text" className="ps-2" placeholder="Phone Number"  value={userInfo.phoneNo} onChange={(e)=> setuserInfo({...userInfo , phoneNo:e.target.value})}/>
                        </div>
                    </div>
                    <textarea rows="5"  className="ps-3 d-block" placeholder="Message" value={userInfo.message} onChange={(e)=> setuserInfo({...userInfo , message:e.target.value})}></textarea>
                    <button type="submit" onClick={send} className={active ? "active" : ""}>send</button>
                </div>
            </div>
        </section>
    )
}
export default Form