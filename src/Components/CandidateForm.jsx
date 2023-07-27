import React, { useState } from 'react';
import './CandidateForm.css'

const CandidateForm = ({ onAddCandidate }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const newCandidate = {
      id: parseInt(formData.get('id')),
      name: formData.get('name'),
      party: formData.get('party'),
      partyIcon: formData.get('partyIcon'),
      image: formData.get('image'),
    };
    onAddCandidate(newCandidate);
    setPreviewImage(null); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="ID" required />
      <input type="text" name="name" placeholder="Candidate Name" required />
      <input type="text" name="party" placeholder="Party Name" required />
      <input type="text" name="partyIcon" placeholder="Party Icon URL" required />
      <div className="file-input-container">
        <label className="file-input-label">
          Choose Candidate Image
          <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
        </label>
        {previewImage && <img src={previewImage} alt="Preview" className="preview-image" />}
      </div>
      <button type="submit">Add Candidate</button>
    </form>
  );
};

export default CandidateForm;
