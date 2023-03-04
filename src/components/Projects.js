import React, { useState, useEffect } from 'react';

function Project() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState(null); // add user state
  
  
  useEffect(() => {
    fetch('http://localhost:9292/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:9292/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        description: description
      })
    })
    .then(response => response.json())
    .then(data => {
      setProjects([...projects, data]);
      setName('');
      setDescription('');
      
    })
    
    .catch(error => console.log(error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:9292/projects/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      const updatedProjects = projects.filter(project => project.id !== data.id);
      setProjects(updatedProjects);
    })
    .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            {project.name} - {project.description}
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default Project;
