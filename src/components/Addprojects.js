import React, { useState } from 'react'

function Addproject({ onAddProject, userId }) {
    const [projectData, setProjectData] = useState({ name: '', description: '' });
    
    function handleInputChange(event) {
      const { name, value } = event.target;
      setProjectData({ ...projectData, [name]: value });
    }
    
    async function handleSubmit(event) {
      event.preventDefault();
      await onAddProject(projectData);
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <h2>Add Project</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={projectData.name} onChange={handleInputChange} />
        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" value={projectData.description} onChange={handleInputChange} />
        <button type="submit">Add Project</button>
      </form>
    );
  }

export default Addproject
