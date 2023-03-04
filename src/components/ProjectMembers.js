import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProjectMembers() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [members, setMembers] = useState([]);
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:9292/projects/${projectId}`)
      .then(response => setProject(response.data))
      .catch(error => console.log(error));
  }, [projectId]);

  useEffect(() => {
    axios.get(`http://localhost:9292/projects/${projectId}/members`)
      .then(response => setMembers(response.data))
      .catch(error => console.log(error));
  }, [projectId]);

  const handleNewMemberEmailChange = event => {
    setNewMemberEmail(event.target.value);
  };

  const handleAddMember = event => {
    event.preventDefault();

    axios.post(`http://localhost:9292/projects/${projectId}/add_member`, { email: newMemberEmail })
      .then(response => {
        setMembers(members.concat(response.data));
        setNewMemberEmail('');
        setErrorMessage('');
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('Failed to add member');
      });
  };

  return (
    <div>
      <h1>{project && project.name}</h1>

      <h2>Members</h2>
      <ul>
        {members.map(member => (
          <li key={member.id}>{member.firstname} {member.lastname} ({member.email})</li>
        ))}
      </ul>

      <form onSubmit={handleAddMember}>
        <label>
          Email address of new member:
          <input type="email" value={newMemberEmail} onChange={handleNewMemberEmailChange} />
        </label>
        <button type="submit">Add</button>
      </form>

      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}
    </div>
  );
}

export default ProjectMembers;
