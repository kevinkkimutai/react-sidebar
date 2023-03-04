import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const MemberForm = ({ projectId, currentUser }) => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [error, setError] = useState("");

  // Fetch all users
  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new project member
    const formData = {
      user_id: selectedUser,
      project_id: projectId,
      role: "member",
    };

    fetch("http://localhost:9292projects/" + projectId + "/members", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          // Redirect to project page
          history.push("/projects/" + projectId);
        } else {
          setError("Failed to add member");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <h2>Add Member</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUser">
          <Form.Label>Select User:</Form.Label>
          <Form.Control
            as="select"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            required
          >
            <option value="" disabled>
              Select User
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.firstname} {user.lastname}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {error && <div className="text-danger">{error}</div>}

        <Button variant="primary" type="submit">
          Add Member
        </Button>
      </Form>
    </div>
  );
};

export default MemberForm;
