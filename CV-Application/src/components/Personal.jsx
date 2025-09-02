import { useState } from "react"
import '../styles/personal.css'

export default function PersonalDetails(){

    const[name, setName] = useState("")
    const[mail, setMail] = useState("")
    const[phone, setPhone] = useState("")
    const[address, setAddress] = useState("")
    return(
        <>
        <h2>Personal Details</h2>
        <label className="required">Full Name</label> <br />
        <input type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        /><br />

        <label className="required">Email</label> <br />
        <input type="email" 
         value={mail}
         onChange={(event) => setMail(event.target.value)}
        /><br />

        <label className="required">Phone No.</label> <br />
        <input type="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        /><br />

        <label>Address</label> <br />
        <input type="text"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        /><br />

        </>
    )
}