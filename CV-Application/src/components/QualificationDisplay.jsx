import '../styles/qualificationDisplay.css'
export default function QualificationDisplay({ form1Data }) {
    if (!form1Data || form1Data.length === 0) return null;
  
    return (
      <>
      
        <div className="internal1">
        <h2 className='h2'>Education</h2>
          {form1Data.map((edu) => (
           edu.id === 0 ? null :(
            <div key={edu.id} className="edu-item">
              <div className="date">
              <p>
                {edu.startYear?.getFullYear()} - {edu.endYear?.getFullYear()}
              </p>
              <p>{edu.location}</p>
               </div>
               <div className=" school">
              <p>{edu.school}</p>
              <p>{edu.degree}</p>
              </div>
              
            </div>
           )
          ))}
        </div>
      </>
    );
  }
  