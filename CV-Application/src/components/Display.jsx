import Personaldisplay from "./PersonalDisplay";
import QualificationDisplay from "./QualificationDisplay";
import ExperienceDisplay from "./ExperienceDisplay";
import '../styles/display.css';

export default function Display({ formData, form1Data, formData3 }) {
  return (
    
    <div className="body">
      <div className="heading">
        {/* Show Personal only if data exists */}
        {formData && <Personaldisplay formData={formData} />}
      </div>

      

      <div className="mid">
        {/* Show Qualification only if data exists */}
        {form1Data && <QualificationDisplay form1Data={form1Data} />}
      </div>

      
      {formData3 && <ExperienceDisplay formData3={formData3} />}
    </div>
    
  );
}
