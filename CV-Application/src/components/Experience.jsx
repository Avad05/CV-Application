import { useState } from "react"
import { FaBriefcase } from "react-icons/fa"
import { FaAngleDown } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/qualification.css';

export default function ExperienceDetails(){

        const [company, setCompany] = useState("")
        const [job, setJob] = useState("")
        const [startYear, setStartYear] = useState("")
        const [endYear, setEndYear] = useState("")
        const [location, setLocation] = useState("")
        const [showResult, setShowResult] = useState(false)
        const onClick = () => {setShowResult(!showResult)} 
        const [showEntire, setShowEntire] = useState(false)
        const onClick3 = () => {setShowEntire(!showEntire)}
        const [isRotated, setisRotated] = useState(false);
        const handleClick = () => {setisRotated(!isRotated);}

           return(
            <>
              <h2 onClick={onClick3}><FaBriefcase /> Experience   <FaAngleDown  onClick={handleClick} className={`arrow ${isRotated ? 'rotated' : ''}`}
               /> </h2>
              {showEntire ? null : null}


              {showEntire && (
              <>
              {showResult  &&  (
                <>
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

                   <label>Location</label> <br />
                 <input type='text'
                 value={location}
                 onChange={(event) => setLocation(event.target.value)}
                  /><br  /> <br />

                  </>
              )}

              
                <>
                <button className="addEducation" onClick={onClick}> + Experience</button>
                {showResult ? null : null}
                </> 
              
                </>
              
            )}

            </>
           )
}