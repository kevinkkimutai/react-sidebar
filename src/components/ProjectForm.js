// import React, { useState } from 'react';

// const ProjectForm = (onSubmit ) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit({ name, description });
//     setName('');
//     setDescription('');
//   }

//   return (
//     <form onSubmit={handleSubmit} >
//       <div className='bg-dark text-white'>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
//       </div>
//       <div>
//         <label htmlFor="description">Description:</label>
//         <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} required />
//       </div>
//       <button type="submit">Create Project</button>
//     </form>
//   );
// }

// export default ProjectForm;

import { useState } from 'react';
import axios from 'axios';

function ProjectForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/projects', { name, description });
      console.log(response.data);
      // Redirect to the project list page
      window.location.href = '/projectlist';
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </label>
      <button type="submit">Create Project</button>
    </form>
  );
}

export default ProjectForm;
