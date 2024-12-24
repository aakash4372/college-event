import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { RiUser3Line } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../apiConfig'; // Import API_BASE_URL

const LoginRegister = () => {
  const [isRegistering, setIsRegistering] = useState(true);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [degree, setDegree] = useState('');
  const [college, setCollege] = useState('');
  const [category, setCategory] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, {
        name,
        phone,
        email,
        degree,
        college,
        category,
      });
      toast.success(response.data.message);
      setName('');
      setPhone('');
      setEmail('');
      setDegree('');
      setCollege('');
      setCategory('');
    } catch (error) {
      toast.error('Error: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email: loginEmail,
        password: loginPassword,
      });
      toast.success(response.data.message);
      navigate('/tablesinforamtionlist');
    } catch (error) {
      toast.error('Error: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className='container form-section'>
      <Toaster />
      <div className="text-white text-center">
        <h2>{isRegistering ? 'Registration' : 'Admin'}</h2>
      </div>
      {isRegistering ? (
        <Form onSubmit={handleRegisterSubmit}>
          <h4 className='mt-5 d-flex align-items-center gap-2 text-white mb-4'>
            <RiUser3Line color='#bc81f7' /> Registration
          </h4>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName" className="mb-4">
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPhone" className="mb-4">
                <Form.Control
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formDegree" className="mb-4">
                <Form.Control
                  as="select" className='select-input'
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                >
                  <option value="">Select Degree</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formCollege" className="mb-4">
                <Form.Control
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  placeholder="Enter your college name"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCategory" className="mb-4">
                <Form.Control
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className='select-input'
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
          <Button variant="primary" type="submit" className="gradient-button">
            Register
          </Button>
          <div style={{ marginTop: '10px' }}>
            <p className='text-white'>
              Admin access only here!{' '}
              <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => setIsRegistering(false)}>
                Login here
              </Button>
            </p>
          </div>
        </Form>
      ) : (
        <Form onSubmit={handleLoginSubmit}>
          <h4 className="mt-5 d-flex align-items-center gap-2 text-white mb-4">
            <RiAdminLine color="#bc81f7" /> Admin Login
          </h4>
          <Row>
            <Col md={6} className="mb-4">
              <Form.Group controlId="formLoginEmail">
                <Form.Control
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-4">
              <Form.Group controlId="formLoginPassword">
                <Form.Control
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="gradient-button">
            Login
          </Button>
          <div style={{ marginTop: '10px' }}>
            <p className="text-white">
              New Registration here!{' '}
              <Button
                variant="link"
                style={{ textDecoration: 'none' }}
                onClick={() => setIsRegistering(true)}
              >
                Register here
              </Button>
            </p>
          </div>
        </Form>
      )}
    </div>
  );
};

export default LoginRegister;
