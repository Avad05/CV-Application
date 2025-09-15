import { useState } from "react"
import { FaBriefcase } from "react-icons/fa"
import { FaAngleDown } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/experience.css';

const initialFormState = {
  company: '',
  postition: '',
  startYear: null,
  endYear: null,
  location: '',
  description: '',
};

export default function ExperienceDetails({setFormData3}) {
  // 1. Single state for the entire list of education objects
  const [qualifications, setQualifications] = useState([
    {
      id: 1,
      company: '',
      postition: '',
      startYear: null,
      endYear: null,
      location: '',
      description:'',
    },
  ]);

  // 2. State to manage the form. `null` means hidden, 'new' means adding, an id means editing.
  const [editingId, setEditingId] = useState(null);

  // 3. Single state for all form inputs
  const [formData3, setFormData] = useState(initialFormState);

  // State to control the collapsible section
  const [isSectionOpen, setSectionOpen] = useState(true);

  // --- Event Handlers ---

  // When user clicks "+ Add Education"
  const handleAddNew = () => {
    setFormData(initialFormState); // Clear form fields
    setEditingId('new'); // Set mode to 'new' to show the form
  };

  // When user clicks an existing education item
  const handleEdit = (education) => {
    setFormData(education); // Pre-fill the form with the item's data
    setEditingId(education.id); // Set mode to 'edit'
  };
  
  // When user types in the form
  const handleFormChange = (fieldName, value) => {
    setFormData({ ...formData3, [fieldName]: value });
  };

  // When user clicks "Save"
  const handleSave = (e) => {
    e.preventDefault();
  
    let updatedEducations;
  
    // If editing existing
    if (editingId && editingId !== 'new') {
      updatedEducations = qualifications.map((edu) =>
        edu.id === editingId ? { ...formData3, id: edu.id } : edu
      );
    } 
    // If adding new
    else {
      updatedEducations = [
        ...qualifications,
        { ...formData3, id: Date.now() },
      ];
    }
  
    // Update local state
    setQualifications(updatedEducations);
  
    // ✅ Immediately send updated list to App
    setFormData3(updatedEducations);
  
    // Hide form
    setEditingId(null);
  };

  // When user clicks "Cancel"
  const handleCancel = () => {
    setEditingId(null);
  };
  
  // --- JSX Rendering ---

  return (
    
    <div className="Body">
    <div className="qualification-container">
      <h2 onClick={() => setSectionOpen(!isSectionOpen)}>
        <FaBriefcase /> Experience
        <FaAngleDown className={`arrow ${isSectionOpen ? 'rotated' : ''}`} />
      </h2>

      {isSectionOpen && (
        <>
          {/* If editingId is NOT null, show the form. Otherwise, show the list. */}
          {editingId ? (
            // --- THE FORM ---
            <form onSubmit={handleSave} className="education-form">
              <label className="required">Company</label> <br />
              <input
                type="text"
                value={formData3.company}
                onChange={(e) => handleFormChange('company', e.target.value)}
                placeholder="e.g., Meta"
                required
                className='grey'
              /><br /> <br />

              <label className="required">Postition</label> <br />
              <input
                type="text"
                value={formData3.postition}
                onChange={(e) => handleFormChange('postition', e.target.value)}
                placeholder="e.g., Senior SWE"
                required
                className='grey'
              /><br /> <br />
              
              <div className="date-fields">
                <div>
                  <label className="required">Start Year</label> <br />
                  <DatePicker
                    selected={formData3.startYear}
                    onChange={(date) => handleFormChange('startYear', date)}
                    dateFormat="yyyy"
                    showYearPicker
                    required
                    className='grey'
                  /><FaCalendarAlt /><br /> <br />
                </div>
                <div>
                  <label className="required">End Year</label><br />
                  <DatePicker
                    selected={formData3.endYear}
                    onChange={(date) => handleFormChange('endYear', date)}
                    dateFormat="yyyy"
                    showYearPicker
                    required
                    className='grey'
                  /><FaCalendarAlt />
                </div><br />
              </div>

              <label>Location</label><br />
              <input
                type="text"
                value={formData3.location}
                onChange={(e) => handleFormChange('location', e.target.value)}
                placeholder="e.g., Mumbai, India"
                className='grey'
              /><br /> <br />
              
              <label>Description</label><br />
              
                <textarea className="description" type="text"
                value={formData3.description}
                onChange={(e) => handleFormChange('description', e.target.value)}
                placeholder=" "
                /><br /> <br />
                
          

              <div className="form-buttons">
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
              </div>

              
            </form>
          ) : (
            // --- THE LIST VIEW ---
            <>
              <div className="education-list">
                {qualifications.map((edu) => (
                  <div key={edu.id} className="list-item" onClick={() => handleEdit(edu)}>
                    <strong>{edu.company}</strong>
                  </div>
                ))}
              </div>
              <button className="add-button" onClick={handleAddNew}>
                + Experience
              </button>
            </>
          )}
        </>
      )}
    </div>
    </div>
  );
}