import '../styles/experienceDisplay.css'
export default function ExperienceDisplay ({formData3}){
    if (!formData3 || formData3.length === 0) return null;

    return(
        <>
        <div className="internal2">
        <h2 className='h2'>Experience</h2>
           {formData3.map((exp) => (
            <div key={exp.id} className="exp-items" >
                <div className="loc">
                    <p>{exp.startYear?.getFullYear()}  {exp.endYear?.getFullYear()}</p>
                    <p>{exp.location}</p>
                </div>
                <div className="pos">
                    <p>{exp.company}</p>
                    <p>{exp.postition}</p>
                    <p>{exp.description}</p>
                </div>    

             </div>
           ))} 
        </div>
        </>
    )

}