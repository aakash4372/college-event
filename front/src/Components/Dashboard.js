import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from 'react-bootstrap/Navbar';
import { LuSparkles } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import '../App.css';
import Register from './register';

function Dashboard() {
    const AccordionData = [
        {
          event: "BEST MANAGER",
          head: "KARTHIK",
          teamMembers: ["Sweatha", "John Bosco", "Amjad", "Akalya", "Ramya", "Kishore BBA"]
        },
        {
          event: "BUSINESS QUIZ",
          head: "ARTHI",
          teamMembers: ["Priyadarshini", "Abinaya", "Lingeshwari", "Priyanka", "Akshaya", "Kishore B. Com", "Inbasyaatsan"]
        },
        {
          event: "AD - ZAP",
          head: "NIVEDHA",
          teamMembers: ["Shanavas", "Muhammed Aslah", "Manikandan", "Sulthana Shirin", "Darmeashwaran", "Chandramouli", "Vijayalakshmi"]
        },
        {
          event: "FINMAN",
          head: "NIGILA",
          teamMembers: ["Narkes Banu", "Sivasakthi", "Mohanapriya", "Alameen", "Sandhya", "Divya", "Kailash"]
        },
        {
          event: "IPL",
          head: "MADHESH",
          teamMembers: ["Harini", "Ragavi", "Surya Krishna", "Ramachandran", "Gowtham", "Sugumaran", "Kavya Sri"]
        },
        {
          event: "CONNECTION",
          head: "SATHEESH",
          teamMembers: ["Santhosh", "Charumathi", "Mathumitha", "Logeshwari", "Arunachalam", "Prasath", "Sanjay"]
        }
      ];
      
  return (
    <div className='section-1' id='home'>
        <Navbar bg="light" data-bs-theme="light" className='fixed-top navbar'>
            <Container className="d-flex justify-content-between align-items-center"> 
                <Navbar.Brand href="#home" className='d-flex align-items-center gap-2'>
                    <div className='d-flex align-items-center gap-3'>
                        <LuSparkles size={27} className='sparkicon'/>
                        <div className="heading-sect">
                            <h1 className="heading-1">INCOGNITA 2K25</h1>
                            <p className="heading-2">RGCET Presents</p>
                        </div>
                    </div>
                </Navbar.Brand>
                <div className="d-none d-md-block">
                    <Nav className="ms-auto gap-5">
                        <a href="#Events" className='nav-link'>Event</a>
                        <a href="#Register" className='nav-link'>Register</a>
                    </Nav>
                </div>
            </Container>
        </Navbar>  

        <div className="section-2 text-center">
            <h1 className="main-heading">INCOGNITA 2K25</h1>
            <p className="main-college-name mb-3 d-flex align-items-center justify-content-center gap-2 mb-5"><FaGraduationCap  className='hat'/> Rajiv Gandhi College of Engineering and Technology</p>
            <p className="main-college-para mb-5">Join us for an extraordinary technical symposium where innovation meets excellence. Register now and be part of this amazing journey.</p>
        </div> 

        <div className="section-3 mb-5" id='Events'>
            <div className="text-center text-white event-heading mb-3">
                <h3>Event Teams</h3>
            </div>

            <Container className='mt-5'>
                <Row>
                    {AccordionData.map((items,index)=>(
                        <Col md={4} className='mb-4' key={index}>
                            <Accordion className='accordion-full' defaultActiveKey={['0', '1', '2']} alwaysOpen>
                                <Accordion.Item eventKey={index.toString()}>
                                    <Accordion.Header>
                                        <div className="accordion-header">
                                            <h3 className='mb-3'>{items.event}</h3>
                                            <p className='d-flex align-items-center gap-2'><TbUsers size={25}/>Head: {items.head}</p>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className='mb-3'><strong>Team Members:</strong></p>
                                        <ul>
                                            {items.teamMembers.map((member,id)=>(
                                                <li key={id}>{member}</li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>  

        <div className="section-4" id='Register'>
            <Register/>
            
        </div>

        <footer className="text-center text-white mt-5">
            <p className="copyright-text">© 2024 INCOGNITA 2K25 - RGCET. All rights reserved.</p>
        </footer>
        
    </div>
  )
}

export default Dashboard;
