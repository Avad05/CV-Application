import { useState } from "react"
import '../styles/personal.css'
import Personaldisplay from "./PersonalDisplay"

export default function PersonalDetails({ setFormData }) {
  const [localData, setLocalData] = useState({
    name: '',
    mail: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLocalData({
      ...localData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(localData);  // ✅ Send data up to App
    console.log('i am working')
  };

  return (
    <form onSubmit={handleSubmit} className="personal">
      <h2>Personal Details</h2>

      <label>Full Name</label><br/>
      <input type="text" name="name" value={localData.name} onChange={handleInputChange} className="first" /><br/>

      <label>Email</label><br/>
      <input type="email" name="mail" value={localData.mail} onChange={handleInputChange} className="first"/><br/>

      <label>Phone No.</label><br/>
      <input type="tel" name="phone" value={localData.phone} onChange={handleInputChange} className="first"/><br/>

      <label>Address</label><br/>
      <textarea type="text" name="address" value={localData.address} onChange={handleInputChange} className="longer"/><br/> <br />

      <button type="submit">Add</button>
    </form>
  );
}
