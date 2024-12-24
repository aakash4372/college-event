import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Form, Row, Col } from 'react-bootstrap';
import '../App.css'

function UserTable() {
  const [users, setUsers] = useState([]);
  const [degree, setDegree] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users', {
          params: { degree, category },
        });
        setUsers(response.data.users);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, [degree, category]);

  const handleDegreeChange = (e) => setDegree(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  return (
    <div>
      <div className="filters d-flex flex-column mb-4">
        <Row>
          <Col xs={6} md={3}>
            <Form.Group>
              <Form.Label style={{ color: '#007bff' }}>Degree</Form.Label>
              <Form.Control 
                as="select" 
                value={degree} 
                onChange={handleDegreeChange} 
                size="sm" 
                style={{ backgroundColor: '#f8f9fa', borderColor: '#007bff' }}
              >
                <option value="">Select Degree</option>
                <option value="MBA">MBA</option>
                <option value="MCA">MCA</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs={6} md={3} className="offset-md-6">
            <Form.Group>
              <Form.Label style={{ color: '#007bff' }}>Category</Form.Label>
              <Form.Control 
                as="select" 
                value={category} 
                onChange={handleCategoryChange} 
                size="sm" 
                style={{ backgroundColor: '#f8f9fa', borderColor: '#007bff' }}
              >
                <option value="">Select Category</option>
                <option value="best manager">Best Manager</option>
                <option value="business quiz">Business Quiz</option>
                <option value="ad-zap">Ad-Zap</option>
                <option value="finman">Finman</option>
                <option value="ipl">IPL</option>
                <option value="connection">Connection</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </div>

      <Table striped bordered hover responsive style={{ backgroundColor: '#e9ecef' }}>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Degree</th>
            <th>Category</th>
            <th>College</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.degree}</td>
                <td>{user.category}</td>
                <td>{user.college}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No users found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
