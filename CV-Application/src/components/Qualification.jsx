
import { useState } from 'react'
import { FaSchool } from 'react-icons/fa'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function QualificationDetails(){

    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [selectedYear, setSelectedYear]  = useState("");
    const [end, setEnd] = useState("");
    const [location, setLocation] = useState("");
        return(
            <>
            <h2><FaSchool /> Education</h2>

            <label className='required'>School</label> <br />
            <input type='text'
            value={school}
            onChange={(event) => setSchool(event.target.value)}
             /> <br />

             <label className='required'>Degree</label> <br />
             <input type='text'
             value={degree}
             onChange={(event) => setDegree(event.target.value)}
             />
            <br />

             <label className='required'>StartYear</label> <br /> 
              <DatePicker 
             selected={selectedYear}
             onChange={(date) => setSelectedYear(date)}
             dateFormat="yyyy" // Format to display only the year
             showYearPicker // Enable year-only selection
             /> <br />
              

             <label className='required'>EndYear</label> <br />
             <DatePicker 
             selected={end}
             onChange={(date) => setEnd(date)}
             dateFormat="yyyy" // Format to display only the year
             showYearPicker // Enable year-only selection
             /> <br />  

             <label>Location</label> <br />
             <input type='text'
             value={location}
             onChange={(event) => setLocation(event.target.value)}

             />
             <br />


             

            </>
        )

}