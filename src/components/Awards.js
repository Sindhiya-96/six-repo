import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function Awards(){
    return(<>
      <Navbar bg="dark" expand="lg" className="others_nav ">
      <Container fluid className='py-5'>
      <Navbar.Brand  className="brand-style me-auto"><NavLink to='/'>BAIDYA SAHA</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto others_navlink ">
            <Nav.Link className=" navbar1_link fs-5"><NavLink to='/' className='fs-5 text-decoration-none text-white'>Home</NavLink></Nav.Link>
            
            <NavDropdown title="Teaching" id="basic-nav-dropdown2" className="navbar1_link text-white">
              <NavDropdown.Item className='fs-5'><NavLink to='/philosophy' className='fs-5 text-decoration-none text-secondary'>Philosophy</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/pgcourses' className='fs-5 text-decoration-none text-secondary'>PG Courses</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/ugcourses' className='fs-5 text-decoration-none text-secondary'>UG Courses</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/supervision' className='fs-5 text-decoration-none text-secondary'>Supervision</NavLink></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Research Highlights" id="basic-nav-dropdown2" className="navbar1_link text-white ">
              <NavDropdown.Item className='fs-5'><NavLink to='/interest' className='fs-5 text-decoration-none text-secondary'>Interests</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/blog' className='fs-5 text-decoration-none text-secondary'>Publications</NavLink></NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link className="hover-shadow navbar1_link fs-5"><NavLink to='/admin' className='fs-5 text-decoration-none text-white'>Administration</NavLink></Nav.Link>
            <Nav.Link className="hover-shadow navbar1_link fs-5 "><NavLink to='/awards' className='fs-5 text-decoration-none text-white'>Awards</NavLink></Nav.Link>
            <Nav.Link className="hover-shadow navbar1_link fs-5 "><NavLink to='/others' className='fs-5 text-decoration-none text-white'>Others</NavLink></Nav.Link>
            <Nav.Link className="hover-shadow navbar1_link fs-5"><NavLink to='/contact' className='fs-5 text-decoration-none text-white'>Contact Us</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 


{/*----------------------------------------Awards Header ends--------------------------------------------*/} 
          
          
          
<div >
<h1 className="awards_title text-center">AWARDS</h1>
<div class="container py-5 ">
  <div class="main-timeline-4 text-white awards_cont">
    <div class="timeline-4 left-4">
      <div class="card gradient-custom">
        <div class="card-body p-4">
          
          <h4>2020-2025</h4>
          
          <p>Prestigious NSERC discovery and a launch supplement grant as an early career researcher
          </p>
          
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div class="timeline-4 right-4">
      <div class="card gradient-custom-4">
        <div class="card-body p-4">
          
          <h4>2020-2021</h4>
         
          <p>Reduction in teaching award to support research by Concordia University of Edmonton
          </p>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div class="timeline-4 left-4">
      <div class="card gradient-custom">
        <div class="card-body p-4">
        
          <h4>2015-2017</h4>
         
          <p>Member of the National System of Researchers (SNI), Mexico, level 1 
          </p>
          
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div class="timeline-4 right-4">
      <div class="card gradient-custom-4">
        <div class="card-body p-4">
          
          <h4>2016-2019</h4>
         
          <p>Basic science research grant as a young investigator.
          </p>
          
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div class="timeline-4 left-4">
      <div class="card gradient-custom">
        <div class="card-body p-4">
      
          <h4>2011-2014</h4>
          
          <p>Post-doctoral fellowship offered from University of Calgary, Pittsburg, WFUSM, Mayo Clinic
          </p>
          
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div class="timeline-4 right-4">
      <div class="card gradient-custom-4">
        <div class="card-body p-4">
        
          <h4>2009-2010</h4>
          
          <p>MITACS industrial internship awards for three times
          </p>
         
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div class="timeline-4 left-4">
      <div class="card gradient-custom">
        <div class="card-body p-4">
         
          <h4>2003-2011</h4>
         
          <p>Several summer internship awards
          </p>
          
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div class="timeline-4 right-4">
      <div class="card gradient-custom-4">
        <div class="card-body p-4">
        
          <h4>2002-2011</h4>
          
          <p>Teaching and Research Fellowship
          </p>
         
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div class="timeline-4 left-4">
      <div class="card gradient-custom">
        <div class="card-body p-4">
        
          <h4>2007</h4>
          
          <p>Mary Louise Imrie & J Gordin Kaplan Graduate Student Travel award
          </p>
         
        </div>
      </div>
    </div>


  </div>
</div>
</div>

{/*-----------------------------------------Awards Footer------------------------------------------------------*/}
<Card.Footer className="text-center bg-dark rounded-0 border-top p-2 text-white fw-normal others_card">Copyright &copy; 2022</Card.Footer>
</>);
}

export default Awards;