import { useState } from "react"
import { FaBriefcase } from "react-icons/fa"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function ExperienceDetails(){

        const [company, setCompany] = useState("")
        const [job, setJob] = useState("")
        const [startYear, setStartYear] = useState("")
        const [endYear, setEndYear] = useState("")
        const [location, setLocation] = useState("")
           return(
            <>
              <h2><FaBriefcase /> Experience</h2>
              <label className="required">Company Name</label> <br />
              <input type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              /><br />

              <label className="required">Position Title</label> <br />
              <input type="text"
              value={job}
              onChange={(event) => setJob(event.target.value)}
              />< br />

              <label className='required'>StartYear</label> <br /> 
                 <DatePicker 
                  selected={startYear}
                  onChange={(date) => setStartYear(date)}
                  dateFormat="yyyy" // Format to display only the year
                  showYearPicker // Enable year-only selection
                  /> <br />

                <label className='required'>EndYear</label> <br />
                    <DatePicker 
                      selected={endYear}
                      onChange={(date) => setEndYear(date)}
                      dateFormat="yyyy" // Format to display only the year
                      showYearPicker // Enable year-only selection
                     /> <br /> 

<                label>Location</label> <br />
                 <input type='text'
                 value={location}
                 onChange={(event) => setLocation(event.target.value)}
                  />
                            

            </>
           )
}