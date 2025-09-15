import React from "react"
import '../styles/PersonalDisplay.css'
import { FaPhone, FaAddressCard, FaMailBulk } from 'react-icons/fa';
export default function Personaldisplay({formData}){
    if (!formData) return null;
   
    return(
        <>
        <h1>{formData.name}</h1>
        <div className="internal">
        <p><FaMailBulk />{formData.mail}</p>
        <p><FaPhone /> {formData.phone}</p>
        <p><FaAddressCard /> {formData.address}</p>
        </div>
        </>
    )

}