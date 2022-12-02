import React from "react"
import { FaLessThan } from 'react-icons/fa'
import { BsHouseDoor } from 'react-icons/bs'
import Flag from "../images/Flag.jpg"

function Login() {
    return(
        <main className="container font-Mulish w-[47rem] h-[100vh] px-10 mx-[19rem]">
            <nav className="flex justify-between py-4 items-center text-[#1dcfa2] text-[2rem] hover:transition-y">
                <FaLessThan/>
                <span className="bg-#ffffff rounded-full font-semibold">
                <p>Login</p>
                </span>
                <BsHouseDoor/>
            </nav>
            <hr />
            <body>
                <div className="text-center my-6 mt-4">
                    <div className="w-[7rem] h-[7rem] rounded-full bg-white drop-shadow-lg ml-[17rem] outline-grey-500">
                        <span className="text-[4rem] text-[#1dcfa2] font-bold">p</span>
                    </div>
                    <p className="text-[#8497a7] text-[25px] pt-3">Welcome to Opay</p>
                </div>
                <form className="form-control text-[#293093] text-[20px] my-[3rem] p-4 ">
                    <label htmlFor="Phone number" className="label-form">Phone Number</label>
                    <br />
                    <div className="py-3 rounded-xl"> 
                        <img src={Flag} alt="" className="inline bg-[#eef4f8] w-[3rem] h-[4rem] mb-2 px-2  "/>  
                        <input type="text" 
                            id="Phone number" 
                            className="w-[7rem] h-[4rem] bg-[#eef4f8] text-[20px] font-bold px-4" 
                            placeholder="+234"
                            style={{border: "none"}}
                            disabled />
                            
                            <input type="text" 
                            id="Phone number" 
                            className="w-[29rem] h-[4rem] bg-[#eef4f8] text-[20px] pl-4 ml-3 rounded-lg mb-[2rem] outline-green-200" 
                            placeholder="Enter your phone number"
                            style={{border: "none"}}
                            required/>
                    </div>
                    <label htmlFor="Password" className="">Password</label>
                    <br />
                    <div className="pt-2">
                    <input type="text" 
                        id="Password" 
                        className="w-[40rem] h-[4rem] bg-[#eef4f8] text-[20px] pl-4 rounded-lg outline-green-200" 
                        placeholder="6 digits"
                        style={{border: "none"}}
                        required/>
                    </div>
                    <button className="btn ml-15 items-center text-[#f7e4cd] bg-[#8497a4] w-[40rem] h-[4rem] text-[20px] font-bold mt-[4rem] rounded-xl hover:-transition-y-1 delay-50">Confirm</button>
                    <br />
                    <br />
                    <button className="btn ml-15 text-[#ffffff] bg-[#1dcf9f] w-[40rem] h-[4rem] text-[20px] font-bold rounded-xl transition-all" onClick="hover:transition ease-in-out duration-400">Register</button>
                    
                </form>
                
            </body>
        </main>
    )
}


export default Login